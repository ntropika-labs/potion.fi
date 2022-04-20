<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    data() {
      return {
        featureItems: [
          {
            label: this.$t('lp.features.growth.title'),
            icon: require('~/assets/images/plant.webp'),
          },
          {
            label: this.$t('lp.features.risk_management.title'),
            icon: require('~/assets/images/automated_risk.webp'),
          },
          {
            label: this.$t('lp.features.efficiency.title'),
            icon: require('~/assets/images/money.webp'),
          },
        ],
      };
    },
  })
</script>

<template>
  <GridSection class="sm:max-w-md md:max-lg lg:max-w-3xl mx-auto" :mirrored="true">
    <template #introduction>
      <GradientLabel size="sm" :label="$t('lp.label')"></GradientLabel>
      <LandingTitle :label="$t('lp.title')" size="lg"></LandingTitle>
      <Paragraph>{{$t('lp.description')}}</Paragraph>
    </template>
    <template #picture>
      <div class="w-[70%] md:w-full">
        <img src="~/assets/images/cauldron.webp" class="max-w-full max-h-32 sm:max-h-full w-auto h-auto mx-auto" />
      </div>
    </template>
    <template #card>
      <article class="w-full grid lg:grid-cols-3 gap-6 relative mt-4">
        <GlassCard v-for="(card, index) in featureItems" :key="`feature-card-${index}`"
                   class="flex flex-col items-center space-y-3 lg:(py-6) lg:(py-12 px-14)"
                   size="sm"
                   data-sal="slide-left" :data-sal-delay="400 * index" data-sal-duration="1000" data-sal-easing="ease-out-bounce">
          <CardIcon :src="card.icon" :label="card.label"></CardIcon >
          <p class="font-bold text-base text-center">{{card.label}}</p>
        </GlassCard>
      </article>
    </template>
  </GridSection>
</template>

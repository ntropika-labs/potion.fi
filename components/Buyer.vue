<script lang="ts">
import Vue from 'vue'
import CardIcon from "~/components/CardIcon.vue";

export default Vue.extend({
  components: {CardIcon},
  data() {
    return {
      featureItems: [
        {
          label: this.$t('buyer.features.insurance.title'),
          icon: require('~/assets/images/umbrella.webp'),
        },
        {
          label: this.$t('buyer.features.savings.title'),
          icon: require('~/assets/images/gas.webp'),
        },
        {
          label: this.$t('buyer.features.token.title'),
          icon: require('~/assets/images/coin.webp'),
        },
      ],
    };
  },
})
</script>

<template>
  <GridSection class="sm:max-w-md md:max-lg lg:max-w-3xl mx-auto">
    <template #introduction>
      <GradientLabel size="sm" :label="$t('buyer.label')" class="xl:inline-flex"></GradientLabel>
      <LandingTitle :label="$t('buyer.title')" size="lg"></LandingTitle>
      <Paragraph>{{$t('buyer.description')}}</Paragraph>
    </template>
    <template #picture>
      <div class="w-full lg:w-[60%]">
        <img src="~/assets/images/potion.webp" class="max-w-full max-h-32 sm:max-h-full w-auto h-auto mx-auto" />
      </div>
    </template>
    <template #card>
      <article class="w-full grid lg:grid-cols-3 gap-6 relative mt-4">
        <GlassCard v-for="(card, index) in featureItems" :key="`feature-card-${index}`"
                   class="flex flex-col items-center space-y-3 lg:(py-6) lg:(py-6 px-12)"
                   size="sm"
                   data-sal="slide-left" :data-sal-delay="500 * index" data-sal-duration="1000" data-sal-easing="ease-out-bounce">
          <CardIcon :src="card.icon" :label="card.label"></CardIcon >
          <p class="font-bold text-base text-center">{{card.label}}</p>
        </GlassCard>
      </article>
    </template>
  </GridSection>
</template>

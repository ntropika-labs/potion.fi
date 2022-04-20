<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      featureItems: [
        {
          label: this.$t('features.items.insurance.title'),
          icon: require('~/assets/images/umbrella.webp'),
        },
        {
          label: this.$t('features.items.chain.title'),
          icon: require('~/assets/images/gas.webp'),
        },
        {
          label: this.$t('features.items.token.title'),
          icon: require('~/assets/images/coin.webp'),
        },
      ],
    };
  },
})
</script>

<template>
  <FlexSection class="items-center text-center max-w-3xl mx-auto">
    <div data-sal="slide-left" data-sal-duration="600" data-sal-easing="ease-out-bounce">
      <GradientLabel :label="$t('features.label')"></GradientLabel>
      <LandingTitle :label="$t('features.title')" size="lg"></LandingTitle>
      <Paragraph>{{$t('features.description')}}</Paragraph>
    </div>
    <div class="w-full grid lg:grid-cols-3 gap-6 relative mt-10">
        <GlassCard v-for="(card, index) in featureItems" :key="`feature-card-${index}`"
                   class="flex flex-col items-center space-y-3"
                   size="sm" data-sal="slide-up" data-sal-duration="600" data-sal-easing="ease-out-bounce">
          <img :src="card.icon" :alt="card.label" class="max-w-24 max-h-24" />
          <p class="font-bold text-base xl:text-xl">{{card.label}}</p>
        </GlassCard>
    </div>
  </FlexSection>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    data() {
      return {
        curveTypologies: [
          {
            label: this.$t('bc.curves.asp'),
            icon: require('~/assets/images/curve_asp.webp'),
          },
          {
            label: this.$t('bc.curves.arp'),
            icon: require('~/assets/images/curve_arp.webp'),
          },
        ],
      };
    },
  })
</script>

<template>
  <FlexSection class="items-center text-center max-w-3xl mx-auto">
    <div data-sal="slide-left" data-sal-duration="600" data-sal-easing="ease-out-bounce">
      <GradientLabel :label="$t('bc.label')"></GradientLabel>
      <LandingTitle :label="$t('bc.title')" size="lg"></LandingTitle>
      <Paragraph>{{$t('bc.description')}}</Paragraph>
    </div>
    <div class="flex flex-col md:flex-row justify-center items-center mt-6 space-y-5 md:(space-y-0 space-x-5)">
      <LandingButton :label="$t('bc.white_paper.label')" :href="$t('bc.white_paper.url')" color="secondary-o" target="_blank"></LandingButton>
    </div>
    <div class="flex flex-wrap justify-center items-center space-y-5 md:(space-y-0 space-x-5) relative mt-16">
      <GlassCard v-for="(card, index) in curveTypologies" :key="`bonding-card-${index}`"
                 class="flex flex-col items-center space-y-3 p-3"
                 size="xs"
                 data-sal="slide-up" data-sal-duration="600" data-sal-easing="ease-out-bounce">
        <img :src="card.icon" :alt="card.label" class="max-w-48 max-h-48 md:(max-w-56 max-h-56) 2xl:(max-w-64 max-h-64)"/>
        <p class="text-md xl:text-base max-w-50">{{card.label}}</p>
      </GlassCard>
    </div>
  </FlexSection>
</template>

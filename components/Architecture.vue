<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      background: require('~/assets/images/architecture.svg?raw'),
      technologies: [
        {
          image: require('~/assets/images/ipfs.svg'),
          title: this.$t('architecture.technologies.ipfs.title'),
          description: this.$t('architecture.technologies.ipfs.description'),
        },
        {
          image: require('~/assets/images/grt.svg'),
          title: this.$t('architecture.technologies.grt.title'),
          description: this.$t('architecture.technologies.grt.description'),
        },
      ]
    };
  },
})
</script>

<template>
  <section class="py-8 flex flex-col justify-center max-w-3xl mx-auto">
    <div class="grid lg:grid-cols-2 gap-8">
      <div class="flex flex-col space-y-4 relative z-10 lg:order-2">
        <GradientLabel :label="$t('architecture.label')"></GradientLabel>
        <LandingTitle :label="$t('architecture.title')"></LandingTitle>
        <Paragraph>{{$t('architecture.description')}}</Paragraph>
      </div>
      <div class="grid gap-6 relative lg-order-1">
        <GlassCard v-for="(card, index) in technologies" :key="`technology-card-${index}`" class="flex flex-col items-start space-y-3 relative z-10">
          <div class="flex items-center space-x-3">
            <img :src="card.image" :alt="card.title" class="max-w-8 max-h-8" />
            <LandingTitle :label="card.title" class="mb-0"></LandingTitle>
          </div>
          <Paragraph>{{card.description}}</Paragraph>
        </GlassCard>
        <div class="absolute top-0 left-[-25%] w-[150%] lg:(w-[200%] left-[-50%] top-[-25%])" v-html="background"></div>
      </div>
    </div>
  </section>
</template>

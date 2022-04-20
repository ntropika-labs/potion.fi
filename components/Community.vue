<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      background: require('~/assets/images/PotionDAO.svg?raw'),
      socials: [
        {
          label: 'Discourse',
          icon: require('~/assets/images/discourse.svg'),
          url: '#',
        },
        {
          label: 'Twitter',
          icon: require('~/assets/images/twitter.svg'),
          url: '#',
        },
        {
          label: 'Discord',
          icon: require('~/assets/images/discord.svg'),
          url: '#',
        },
      ],
    };
  },
})
</script>

<template>
  <section class="py-8 flex flex-col justify-center max-w-3xl mx-auto">
    <div class="grid lg:grid-cols-2 gap-8">
      <div class="flex flex-col space-y-4 relative z-10">
        <GradientLabel :label="$t('community.label')"></GradientLabel>
        <LandingTitle :label="$t('community.title')"></LandingTitle>
        <Paragraph>{{$t('community.description')}}</Paragraph>
      </div>
      <div class="grid md:grid-cols-2 gap-6 relative">
        <a v-for="(card, index) in socials" :key="`social-glass-card-${index}`" :title="card.label" :href="card.url" class="relative z-10">
          <GlassCard class="flex flex-col items-center space-y-3">
            <img :src="card.icon" :alt="card.label" class="max-w-6 max-h-6 filter drop-shadow-md" />
            <p class="font-medium text-sm xl:text-lg">{{card.label}}</p>
          </GlassCard>
        </a>
        <div class="absolute top-0 left-[-25%] w-[150%] lg:(w-[200%] left-[-50%] top-[-25%]) conditional-opacity" v-html="background"></div>
      </div>
    </div>
  </section>
</template>
<style scoped>
@supports (backdrop-filter: blur(10px)) {
  .conditional-opacity {
    opacity: 1
  }
}

@supports not (backdrop-filter: blur(10px)) {
  .conditional-opacity {
    opacity: 0.3
  }
}
</style>

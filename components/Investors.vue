<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      investors: [
        {
          icon: require('~/assets/bakers/polychain.webp'),
          label: 'Polychain Capital',
        },
        {
          icon: require('~/assets/bakers/placeholder.webp'),
          label: 'Placeholder',
        },
        {
          icon: require('~/assets/bakers/spartan.webp'),
          label: 'Spartan Capital',
        },
        {
          icon: require('~/assets/bakers/pantera.webp'),
          label: 'Pantera Capital',
        },
        {
          icon: require('~/assets/bakers/metacartel.webp'),
          label: 'MetaCartel Ventures',
        },
        {
          icon: require('~/assets/bakers/parafi.webp'),
          label: 'Parafi Capital',
        },
        {
          icon: require('~/assets/bakers/thelao.webp'),
          label: 'The LAO',
        },
        {
          icon: require('~/assets/bakers/maven11.webp'),
          label: 'Maven11 Capital',
        },
        {
          icon: require('~/assets/bakers/zee.webp'),
          label: 'Zee',
        },
        {
          icon: require('~/assets/bakers/lemniscap.webp'),
          label: 'Lemniscap',
        },
        {
          icon: require('~/assets/bakers/cryptoplaza.webp'),
          label: 'Crypto Plaza',
        },
        {
          icon: require('~/assets/bakers/robotvent.webp'),
          label: 'Robot Ventures',
        },
        {
          icon: require('~/assets/bakers/betoken.webp'),
          label: 'BeToken Capital',
        },
        {
          icon: require('~/assets/bakers/culture.webp'),
          label: 'Cultur3',
        },
        {
          icon: require('~/assets/bakers/roble_venture_capital.webp'),
          label: 'Roble Venture Capital',
        },
      ],
    };
  },
})
</script>

<template>

  <section class="w-full py-6">
    <hr class="opacity-10 mb-4">
    <LandingTitle :label="$t('investors.title')" size="xs" class="uppercase text-center"></LandingTitle>
    <div class="max-w-5xl mx-auto">
      <div class="grid md:grid-cols-3 lg:grid-cols-5 auto-rows-max items-center place-content-center content-center justify-items-center gap-10">
        <div v-for="(investor, index) in investors" :key="`investor-${index}`" :title="investor.label">
          <img :src="investor.icon" :alt="investor.label" class="max-w-32 max-h-16 h-auto mx-auto" />
        </div>
      </div>
      <hr class="opacity-10 mt-4">
    </div>

  </section>
</template>

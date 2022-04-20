<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      links: [
        {
          icon: require('~/assets/images/discord.svg?raw'),
          label: this.$t("footer.discord.label"),
          url: this.$t("footer.discord.url"),
        },
        {
          icon: require('~/assets/images/twitter.svg?raw'),
          label: this.$t("footer.twitter.label"),
          url: this.$t("footer.twitter.url"),
        },
        {
          icon: require('~/assets/images/medium.svg?raw'),
          label: this.$t("footer.medium.label"),
          url: this.$t("footer.medium.url"),
        }
      ],
      bottomLinks: [
        {
          url: process.env.termsConditionsLink,
          label: this.$t('footer.terms_conditions')
        },
        {
          url: process.env.privacyPolicyLink,
          label: this.$t('footer.privacy_policy')
        },
      ]
    };
  },
})
</script>

<template>
  <footer class="py-6 w-full flex flex-col items-center justify-center">
    <img src="~assets/images/logo.svg" class="h-4 mb-auto mt-0" title="Potion" alt="Potion" />
    <article class="flex items-center space-x-5 mt-8 mb-6">
      <a v-for="(link, index) in links" :key="`footer-link-${index}`" :title="link.label" :href="link.url" class="text-xs tracking-wide font-semibold uppercase text-white" target="_blank">
        <i class="" v-html="link.icon"></i>
      </a>
    </article>
    <div class="text-white/50 text-sm text-center space-y-3">
      <a v-for="(link, index) in bottomLinks" :key="`bottom-footer-link-${index}`" :title="link.label" :href="link.url" class="block hover:text-secondary-500 hover:underline" target="_blank">{{link.label}}</a>
    </div>
  </footer>
</template>

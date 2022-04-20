<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      mobileMenuOpen: false,
      backgroundVisible: false,
      linkIcon: require('~/assets/images/link.svg?raw'),
      links: [
        {
          label: this.$t("header.docs.label"),
          url: process.env.potionUnlockLink, // defined in nuxt.config.js
          disabled: false
        },
        {
          label: this.$t("header.careers.label"),
          url: process.env.blogLink, // defined in nuxt.config.js
          disabled: false
        },
      ],
      cta: {
        label: this.$t("header.launch_app.label"),
        url: process.env.communityLink, // defined in nuxt.config.js
      }
    };
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    toggleMobileMenu() {
      this.togglePageScroll();
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
    togglePageScroll() {
      document.body.classList.toggle('overflow-hidden');
    },
    handleScroll () {
      this.backgroundVisible = window.scrollY > 30;
    }
  },

})
</script>

<template>
  <header class="fixed top-0 left-0 w-screen px-6 py-4 sm:py-6 md:px-12 z-1000 transition-all" :class="{'bg-gradient-to-b from-deep-black-900 to-transparent': backgroundVisible }">
    <section class="container mx-auto flex items-center justify-between">
      <img src="~assets/images/logo.svg" class="h-4 hidden md:block md:mb-1 mt-0" title="Potion" alt="Potion" />
      <img src="~assets/images/logo_icon.svg" class="h-8 block md:hidden md:mb-1 mt-0" title="Potion" alt="Potion" />
      <!-- Desktop Nav -->
      <div class="hidden md:flex">
        <article class="flex items-center space-x-5 ml-auto mr-5 md:(mr-14 space-x-10)">
          <a v-for="(link, index) in links" :key="`header-link-${index}`"
             :title="link.label" :href="link.url"
             class="header-link inline-block text-sm tracking-wide font-semibold uppercase text-white px-3 py-1" target="_blank"
            :disabled="link.disabled"
            :class="{'opacity-50': link.disabled }">
            <CardLabel :label="link.label" color="transparent-hover"><i class="inline-flex align-bottom h-4 w-4 ml-1" v-html="linkIcon"></i></CardLabel></a>
        </article>
        <LandingButton :href="cta.url" size="sm" :label="cta.label" target="_blank"></LandingButton>
      </div>
      <!-- End Desktop Nav -->
      <!-- Mobile Nav -->
      <div class="md:hidden">
        <LandingButton mode="button" size="icon" color="transparent" label="" class="shadow !z-1001" @click="toggleMobileMenu">
            <svg v-if="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-if="mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </LandingButton>
      </div>
      <transition name="fade">
        <div v-if="mobileMenuOpen" class="fixed md:hidden inset-0 main-bg-texture" >

          <div class="relative w-full h-full pt-6 px-8 sm:px-16">
            <LandingTitle label="Menu" size="sm" class="uppercase mb-10"></LandingTitle>
            <article class="flex flex-col space-y-8 ml-auto mr-5 mb-10">
              <a v-for="(link, index) in links" :key="`header-link-${index}`"
                 :title="link.label" :href="link.url"
                 class="inline-block text-lg tracking-wide font-semibold uppercase text-white" target="_blank"
                 :disabled="link.disabled"
                 :class="{'opacity-50': link.disabled }"
              >{{link.label}}<i class="inline-flex align-middle h-5 w-5 ml-1" v-html="linkIcon"
              ></i></a>
            </article>
            <LandingButton :href="cta.url" size="sm" :label="cta.label" target="_blank"></LandingButton>
          </div>

        </div>
      </transition>
      <!-- End Mobile Nav -->
    </section>
  </header>
</template>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

</style>

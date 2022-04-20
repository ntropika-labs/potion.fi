export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  env: {
    potionUnlockLink: process.env.POTION_UNLOCK_LINK,
    blogLink: process.env.BLOG_LINK,
    communityLink: process.env.COMMUNITY_LINK,
    termsConditionsLink: process.env.TERMS_CONDITIONS_LINK,
    privacyPolicyLink: process.env.PRIVACY_POLICY_LINK
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Potion Protocol',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Potion makes the crypto market more secure, offering risk products that are safe and sustainable for both buyers and sellers' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: 'Potion Protocol' },
      { hid: 'og:url', property: 'og:url', content: 'https://potion.fi/' },
      { hid: 'og:title', property: 'og:title', content: 'Potion Protocol' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Potion Protocol' },
      { hid: 'og:description', property: 'og:description', content: 'Potion makes the crypto market more secure, offering risk products that are safe and sustainable for both buyers and sellers.' },
      { hid: 'og:image', property: 'og:image', content: 'https://potion.fi/preview_card.png' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:url', name: 'twitter:url', content: 'https://potion.fi/' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Potion Protocol' },
      { hid: 'twitter:image', name: 'twitter:image', content: 'https://potion.fi/preview_card.png' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'Potion makes the crypto market more secure, offering risk products that are safe and sustainable for both buyers and sellers.' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://potion.fi/favicon.ico' },
      { hid: 'shortcut-icon', rel: 'shortcut-icon', href: 'https://potion.fi/icon.png' },
      { hid: 'apple-touch-icon', rel: 'apple-touch-icon', href: 'https://potion.fi/icon.png' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/svg',
    'nuxt-windicss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/i18n',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en-US.js'
      },
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'en'
  },
}

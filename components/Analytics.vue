<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    data() {
      return {
        slideImages: [
          {
            image: require("~/assets/images/analytics_1.webp"),
            label: ""
          },
          {
            image: require("~/assets/images/analytics_2.webp"),
            label: ""
          },
          {
            image: require("~/assets/images/analytics_3.webp"),
            label: ""
          },
          {
            image: require("~/assets/images/analytics_4.webp"),
            label: ""
          },
        ]
      }
    }
  })
</script>

<template>
  <FlexSection class="items-left text-left max-w-3xl mx-auto">
    <GradientLabel :label="$t('analytics.label')" class="mb-0"></GradientLabel>
    <LandingTitle :label="$t('analytics.title')" size="lg"></LandingTitle>
    <Paragraph>{{$t('analytics.description')}}</Paragraph>
    <div class="flex justify-start flex-wrap space-y-4 sm:(space-y-0 space-x-4) mt-8 mb-2">
      <LandingButton :label="$t('analytics.kelly_curve.label')" :href="$t('analytics.kelly_curve.url')" color="secondary-o" target="_blank"></LandingButton>
    </div>
    <GallerySlider :slides="slideImages" class="mt-8 md:mt-16"></GallerySlider>
  </FlexSection>
</template>

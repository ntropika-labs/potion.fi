<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  mounted() {
   this.$nextTick(() => {
     const heroWrap: any = this.$refs.heroWrapper;
     if(heroWrap) {
       heroWrap.$el.classList.add('sal-animate');
     }

   })
  },
  methods: {
    scrollTo($event: any) {
      const targetEl: any = $event.target;

      if(!targetEl) return true;

      const elRef = targetEl.getAttribute('href') || '';
      const scrollToElement = document.querySelector(elRef) as HTMLElement;

      if(scrollToElement) {
        const offsetTop = scrollToElement.offsetTop - 150; // ~100px header height + 50px spacing

        if ("scrollBehavior" in document.documentElement.style) {
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        } else {
          window.scrollTo(0, offsetTop);
        }

        return false;
      } else {
        return true;
      }
    }
  }
})
</script>

<template>
  <FlexSection ref="heroWrapper" class="text-center items-center min-h-screen transition">
    <BrandTitle :label="$t('hero.title')" class="mb-4 max-w-[50rem]"></BrandTitle>
    <div class="flex flex-col justify-center max-w-[45rem] space-y-5 mb-5">
      <LandingTitle :label="$t('hero.description')" size="md" weight="extralight" class="mb-0"></LandingTitle>
      <LandingTitle v-for="(text, index) in $t('hero.highlights')" :key="`hero-highlight-${index}`" :label="text" size="md" class="mb-4"></LandingTitle>
    </div>
    <article class="flex items-center space-x-4">
      <LandingButton :label="$t('hero.discover.label')" :href="$t('hero.discover.url')" color="secondary-o" @click.prevent="scrollTo"></LandingButton>
    </article>
  </FlexSection>
</template>

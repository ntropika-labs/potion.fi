<script lang="ts">
  import Vue from 'vue'
  let Hammer: any = null;
  if(process.client) {
    Hammer = require("hammerjs");
  }

  export default Vue.extend({
    props:{
      slides: {
        type: Array,
        required: true,
      },
      autoplay: {
        type: Boolean,
        default: false
      },
      enableGestures: {
        type: Boolean,
        default: true
      },
      slideDuration: {
        type: Number,
        default: 30000
      },
      enableTransitions: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        gallery: {},
        totalSlides: 0,
        currentSlide: 0,
        caret: require('~/assets/images/caret.svg?raw'),
        transitioning: false,
        transitionsEnabled: true,
        touchstartEvent: null,
        touchstartX: 0,
        touchstartY: 0,
        touchendX: 0,
        touchendY: 0,
      }
    },
    mounted() {
      /* eslint-disable nuxt/no-env-in-hooks */
      this.gallery = this.$refs.slideWrap as HTMLElement;
      if(process.client) {
        if (this.enableGestures) {
          const hammerInst = new Hammer.Manager(this.gallery, {
            recognizers: [
              [Hammer.Pan, {direction: Hammer.DIRECTION_HORIZONTAL}],
              [Hammer.Swipe, {direction: Hammer.DIRECTION_HORIZONTAL}],
            ],
          });
          hammerInst.on('pan swipe', this.handleGesture);
        }
      }


      this.transitionsEnabled = this.enableTransitions
        && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      const slideArray = this.$refs.slides;
      const slides: Array<any> = Array.isArray(slideArray) ? slideArray : [slideArray];
      this.totalSlides = slides.length;

      for (let i = 0; i < slides.length; i++) {
        const slide = slides[i];
        slide.ondragstart = () => false;
      }

      if (this.autoplay){
        setInterval(() => {
          this.nextSlide();
        }, this.slideDuration);
      }
    },
    methods: {
      prevSlide() {
        this.currentSlide = (this.totalSlides + this.currentSlide - 1) % (this.totalSlides);
      },
      nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % (this.totalSlides);
      },
      selectSlide(index: number) {
        this.currentSlide = index % this.totalSlides;
      },
      transformStyle(index: number) {
        /* eslint-disable dot-notation */
        const styles: {[key:string]: string|number } = {};
        const transforms = [];
        const absDiff = Math.abs( index - this.currentSlide)
        const verticalShift = -5 * absDiff;
        const horizontalShift = -100 * this.currentSlide - 10 * absDiff * absDiff;

        transforms.push(`translate(${horizontalShift}%, ${verticalShift}%)`);
        styles['z-index'] = this.totalSlides - absDiff;

        if(index !== this.currentSlide) {
          const scaleShift = 1 - absDiff * 0.2;
          const propertiesShift = 1 - absDiff * 0.2;

          transforms.push(`scale(${scaleShift})`);
          styles['opacity'] = propertiesShift;
        }

        styles['transform'] = transforms.join(' ');

        return styles;
      },
      handleGesture(event: any) {
        const { deltaX, deltaY, isFinal } = event;

        // Don't respond to gestures that are more vertical than horizontal
        // Unless the gesture started horizontal
        if (
          Math.abs(deltaX) < 8 || Math.abs(deltaY) - Math.abs(deltaX) > -1
        ) {
          return;
        }

        if (isFinal) {
          // Swipe Left
          if (deltaX < 0) {
            this.nextSlide();
          }

          // Swipe Right
          if (deltaX > 0) {
            this.prevSlide();
          }
        }
      }
    },

  });
</script>

<template>
  <div>
    <!-- Slider Controls -->
    <div class="flex items-center space-x-4 mb-3">
      <LandingButton label="" color="opaque" size="icon" mode="button" @click.prevent="prevSlide">
        <i class="inline-flex justify-center w-6 h-6 transform rotate-180" v-html="caret"></i>
      </LandingButton>
      <div class="w-6 text-center text-md opacity-30">
        <span>{{currentSlide+1}}</span><span>/</span><span>{{totalSlides}}</span>
      </div>
      <LandingButton label="" color="opaque" size="icon" mode="button" @click.prevent="nextSlide">
        <i class="inline-flex justify-center w-6 h-6" v-html="caret"></i>
      </LandingButton>
    </div>
    <!-- End Slider Controls -->
    <!-- Slides -->
    <div ref="slideWrap" class="relative flex flex-row flex-nowrap max-h-screen clearfix outline-none focus:outline-none" tabindex="0">
      <article
               v-for="(item, index) in slides"
               :key="`gallery-slide-${index}`"
               class="relative w-full md:w-2/3 lg:w-[512px] h-auto float-left origin-top-left flex-none outline-none focus:outline-none"
               :class="{'transition-transform duration-200 ease-in-out': transitionsEnabled }"
               :style="transformStyle(index)"
               @click="selectSlide(index)">
        <img ref="slides" class="w-full h-auto object-cover select-none " :src="item.image" :alt="item.label" draggable="false">
      </article>
    </div>
    <!-- End Slides -->
  </div>
</template>

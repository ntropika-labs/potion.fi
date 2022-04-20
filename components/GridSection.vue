<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    mirrored: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<template>
  <section class="py-8 flex flex-col justify-center">
    <div role="grid" class="grid gap-8 md:grid-cols-3">
      <article class="md:col-span-2" :class="{'md:order-2': mirrored}"
               data-sal="slide-left" data-sal-duration="600" data-sal-easing="ease-out-bounce">
        <slot name="introduction"></slot>
      </article>
      <article class="flex justify-center" :class="{'md:order-1': mirrored}"
               data-sal="slide-right" data-sal-duration="600" data-sal-easing="ease-out-bounce">
        <slot name="picture"></slot>
      </article>
      <article class="md:col-span-3" :class="{'md:order-3': mirrored}"
               data-sal="slide-up" data-sal-duration="600" data-sal-easing="ease-out-bounce">
        <slot name="card"></slot>
      </article>
    </div>
  </section>
</template>

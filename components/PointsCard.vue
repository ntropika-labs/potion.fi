<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true,
    },
    points: {
      type: Array,
      default: () => [],
    },
  },
});
</script>

<template>
  <article class="glass-card border border-white border-opacity-10 rounded-3xl">
    <article class="py-3.5 px-4">
      <LandingTitle :label="title" size="sm" class="m-0"></LandingTitle>
    </article>
    <hr class="opacity-10 mx-5">
    <article class="py-3.5 px-4">
      <ul class="space-y-4">
        <li v-for="(point, index) in points" :key="`points-card-${index}`" class="text-md">{{point}}</li>
      </ul>
    </article>
  </article>
</template>


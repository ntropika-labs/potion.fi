<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    points: {
      type: Array,
      default: () => [],
    },
  },
});
</script>

<template>
  <div class="glass-card border border-white border-opacity-10 rounded-3xl divide-y divide-white/10 mt-16 lg:mt-4 w-[80%] min-w-56">
    <article v-for="(point, index) in points" :key="`table-info-${index}`" class="flex flex-col md:flex-row justify-between items-center gap-4 p-4">
        <LandingTitle :label="point.title" size="default" class="mb-0 flex-none"></LandingTitle>
        <div  v-for="(info, j) in point.details" :key="`table-details-${j}`" class="text-md max-w-40 flex-1">
          <p>{{info}}</p>
        </div>
    </article>
  </div>
</template>



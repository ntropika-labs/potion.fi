<script>
import Vue from 'vue';
import { weightValidator, weightToStroke } from "~/types";

export default Vue.extend({
  props: {
    weight: {
      type: String,
      default: "regular",
      validator: weightValidator,
    },
  },
  computed: {
    strokeWidth() {
      return weightToStroke(this.weight);
    },
  },
});
</script>

<template>
  <svg class="stroke-current" viewBox="0 0 256 256" @click="$emit('click')">
    <path
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="strokeWidth"
      d="M208 96l-80 80-80-80"
    />
  </svg>
</template>

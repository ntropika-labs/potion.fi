<script lang="ts">
import Vue from 'vue'
import { PropsStringMap } from '~/types'

const sizeToclass: PropsStringMap = {
  xs: 'rounded-xl p-2',
  sm: 'rounded-2xl p-4',
  default: 'rounded-2xl p-8'
};

export default Vue.extend({
  props: {
    size: {
      type: String,
      default: 'default',
      validator: (value: string) => value in sizeToclass,
    },
  },
  computed: {
    sizeClass (): string {
      return sizeToclass[this.size];
    },
  },
});
</script>

<template>
  <article class="glass-card border border-white border-opacity-10 backdrop-filter backdrop-blur-md" :class="sizeClass">
    <slot></slot>
  </article>
</template>

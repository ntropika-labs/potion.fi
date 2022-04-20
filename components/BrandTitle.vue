<script lang="ts">
import Vue from 'vue'
import { PropsStringMap } from '~/types'

const sizeToClass: PropsStringMap = {
  sm: "text-lg xl:text-2xl tracking-[-0.1rem] xl:tracking-[-0.15rem]",
  md: "text-lg",
  default: "text-[3.052rem] md:text-[4.768rem] 2xl:text-[7.45rem] tracking-[-0.3rem] md:tracking-[-0.47rem] 2xl:tracking-[-0.74rem]",
};

const sizeToHeading: PropsStringMap = {
  sm: "h5",
  default: "h2",
};

export default Vue.extend({
  props: {
    label: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: "default",
      validator: (value: string) => value in sizeToClass,
    },
  },
  computed: {
    textSize (): string {
      return sizeToClass[this.size];
    },
    componentTag (): string {
      return sizeToHeading[this.size];
    },
  },
});
</script>

<template>
  <component :is="componentTag" class="font-potion font-normal" :class="textSize">{{ label }}</component>
</template>


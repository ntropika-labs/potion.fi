<script lang="ts">
import Vue from 'vue'
import { PropsStringMap } from '~/types'

const sizeToClass: PropsStringMap = {
  xxs: "text-xs lg:text-sm",
  xs: "text-sm lg:text-base",
  sm: "text-md md:text-base lg:text-lg",
  md: "text-base xl:text-lg 2xl:text-xl",
  default: "text-base md:text-lg 2xl:text-xl",
  lg: "text-xl md:text-2xl lg:text-3xl",
};

const sizeToHeading: PropsStringMap = {
  xxs: "h6",
  xs: "h5",
  sm: "h4",
  md: "h3",
  default: "h2",
  lg: "h1",
};

const weightToClass: PropsStringMap = {
  extralight: "font-normal",
  light: "font-semibold",
  default: "font-bold",
  bold: "font-extrabold",
}

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
    weight: {
      type: String,
      default: "default",
      validator: (value: string) => value in weightToClass,
    },
  },
  computed: {
    textSize (): string {
      return sizeToClass[this.size];
    },
    componentTag (): string {
      return sizeToHeading[this.size];
    },
    textWeight (): string {
      return weightToClass[this.weight];
    },
  },
});
</script>

<template>
  <component :is="componentTag" :class="[textSize, textWeight]">{{ label }}</component>
</template>

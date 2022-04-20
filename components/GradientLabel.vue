<script lang="ts">
import Vue from 'vue'
import { PropsStringMap } from '~/types'

const colorToClass: PropsStringMap = {
  "secondary-to-secondary": "from-secondary-600 to-secondary-400",
  "primary-to-primary": "from-primary-600 to-primary-400",
  "secondary-to-primary": "from-secondary-600 via-white to-primary-600",
  "primary-to-secondary": "from-primary-600 via-white to-secondary-600",
};

export default Vue.extend({
  props: {
    label: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: "sm",
    },
    color: {
      type: String,
      default: "secondary-to-secondary",
      validator: (value: string) => value in colorToClass,
    },
  },
  computed: {
    colorClass () :string {
      return colorToClass[this.color];
    },
  },
});
</script>

<template>
  <BrandTitle :class="colorClass" class="bg-gradient-to-r text-transparent bg-clip-text mb-0" weight="light" :size="size" :label="label"></BrandTitle>
</template>

<script lang="ts">
import Vue from 'vue'
import { PropsStringMap } from '~/types'

const colorToClass: PropsStringMap = {
  primary: "btn-full hover:shadow-primary before:from-primary-500 before:via-primary-400 before:to-primary-600",
  "primary-o": "btn-outline ring-primary-500 hover:shadow-primary hover:from-primary-400 hover:to-primary-500",
  secondary: "btn-full hover:shadow-secondary before:from-secondary-500 before:via-secondary-400 before:to-secondary-600",
  "secondary-o": "btn-outline ring-secondary-500 hover:shadow-secondary hover:from-secondary-400 hover:to-secondary-500",
  transparent: "btn-full bg-transparent hover:shadow-sm hover:bg-dirty-white-300 hover:bg-opacity-10",
  opaque: "btn-full bg-dirty-white-300 bg-opacity-10 xl:bg-transparent hover:bg-opacity-30 hover:bg-dirty-white-300 hover:shadow-sm ",
};

const sizeToClass: PropsStringMap = {
  icon: "p-2",
  sm: "px-4 py-3 text-sm tracking-widest",
  default: "px-6 py-4 text-md tracking-wider ",
  lg: "px-8 py-5 text-lg tracking-wide ",
};

const modeToTag: PropsStringMap = {
  button: "button",
  link: "a",
};

export default Vue.extend({
  props: {
    label: {
      type: String,
      required: true,
      default: "Button",
    },
    size: {
      type: String,
      required: false,
      default: "default",
      validator: (value: string) => value in sizeToClass,
    },
    color: {
      type: String,
      default: "secondary",
      validator: (value: string) => value in colorToClass,
    },
    mode: {
      type: String,
      default: "link",
      validator: (value: string) => value in modeToTag,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    sizeClass (): string {
      return sizeToClass[this.size];
    },
    colorClass (): string {
      return colorToClass[this.color];
    },
    componentTag (): string {
      return modeToTag[this.mode];
    },
  },
});
</script>


<template>
  <component
    :is="componentTag"
    :title="label"
    :disabled="disabled"
    type="button"
    class="btn"
    :class="[
      colorClass,
      sizeClass
    ]"
    @click="$emit('click', $event)"
  >
    <slot></slot>
    <span class="leading-none pointer-events-none">
      {{ label }}
    </span>
  </component>
</template>

<style scoped>
.btn {
  @apply cursor-pointer whitespace-nowrap text-dirty-white-300 font-bold inline-flex justify-center items-center relative z-10 overflow-hidden font-poppins uppercase transition-shadow duration-300 rounded-full focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed;
}

.btn:hover::before {
  transform: translateX(-50%);
}

.btn-full {
  &::before {
    content: "";
    @apply absolute top-0 left-0 w-double h-full transition-transform duration-300 -z-1 bg-opacity-100 bg-gradient-to-r;
  }
}

.btn-outline {
  @apply ring-2 transition-all hover:ring-4;
}
</style>

<script lang="ts">

  import Vue from 'vue'
  import {PropsStringMap} from "~/types";

  const colorToClass: PropsStringMap = {
    "secondary-to-secondary": "bg-gradient-to-r from-secondary-600 to-secondary-400",
    "primary-to-primary": "bg-gradient-to-r from-primary-600 to-primary-400",
    "secondary-to-primary": "bg-gradient-to-r from-secondary-600 via-white to-primary-600",
    "primary-to-secondary": "bg-gradient-to-r from-primary-600 via-white to-secondary-600",
    "light": "bg-white bg-opacity-10",
    "black": "bg-black bg-opacity-10",
    "transparent-hover": 'bg-transparent !bg-opacity-10 hover:bg-white'
  };

  export default Vue.extend({
    props: {
      label: {
        type: String,
        required: true,
      },
      color: {
        type: String,
        default: "black",
        validator: (value: string) => value in colorToClass,
      },
      uppercase: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      colorClass () :string {
        return colorToClass[this.color];
      },
    },
  })
</script>

<template>
  <div class="transition p-2 rounded-md" :class="colorClass">
    <p class="font-bold text-sm" :class="{ 'uppercase': uppercase }">{{label}}<slot></slot></p>
  </div>
</template>

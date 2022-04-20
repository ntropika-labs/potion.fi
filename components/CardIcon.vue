<script lang="ts">

  import Vue from 'vue'
  import {PropsStringMap} from "~/types";

  const sizeToClass: PropsStringMap = {
    icon: "w-4 h-4",
    sm: "w-6 h-6 xl:(w-8 h-8)",
    default: "w-9 h-9 xl:(w-13 h-13)",
    lg: "w-13 h-13 xl:(w-18 h-18)",
    xl: "w-18 h-18 xl:(w-24 h-24)",
    "2xl": "w-24 h-24 xl:(w-36 h-36)",
  };

  export default Vue.extend({
    props: {
      label: {
        type: String,
        required: true,
      },
      src: {
        type: String,
        required: true,
      },
      size: {
        type: String,
        default: "default",
        validator: (value: string) => value in sizeToClass,
      }
    },
    computed: {
      sizeClass() {
        const size = this.size;
        
        return sizeToClass[size];
      }
    }
  })
</script>

<template>
  <div class="flex justify-center items-center">
    <img :src="src" :alt="label" class="w-full h-auto" :class="sizeClass" />
  </div>
</template>


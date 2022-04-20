<script lang="ts">

  import Vue from 'vue'
  import {PropsStringMap} from "~/types";

  const arrowIcon: PropsStringMap = {
    arrow: 'arrowIcon',
    top_half: 'multiTopHalfArrowIcon',
    bottom_half: 'multiBottomHalfArrowIcon',
    multiarrow: 'multiArrowIcon',
    large_multiarrow: 'largeMultiArrowIcon',
    slice: 'sliceArrowIcon',
  };

  const directionToClass: PropsStringMap = {
    up: "rotate-90 xl:rotate-0",
    right: "xl:-rotate-90",
    down: "xl:rotate-180",
    left: "-rotate-180 xl:rotate-90"
  };

  const iconToSpacingClass: PropsStringMap = {
    arrow: "mx-6 w-4 my-4",
    top_half: "",
    bottom_half: "",
    multiarrow: "",
    slice: "mx-4"
  };

  const colorToClass: PropsStringMap = {
    "secondary": "text-secondary-500 hover:text-secondary-400",
    "primary": "text-primary-600 hover:text-primary-400",
    "white": "text-white hover:opacity-50",
  };

  const labelBackgroundToClass: PropsStringMap = {
    "secondary": "from-secondary-600 to-secondary-400",
    "primary": "from-primary-600 to-primary-400",
    "white": "from-primary-600 to-primary-400",
  };

  export default Vue.extend({
    props: {
      icon: {
        type: String,
        default: "arrow",
        validator: (value: string) => value in arrowIcon,
      },
      direction: {
        type: String,
        default: "left",
        validator: (value: string) => value in directionToClass,
      },
      label: {
        type: String,
        required: false,
        default: null
      },
      bglabel: {
        type: String,
        required: false,
        default: null,
        validator: (value: string) => value in labelBackgroundToClass,
      },
      color: {
        type: String,
        default: "white",
        validator: (value: string) => value in colorToClass,
      },
      mirrored: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        icons: {
          arrowIcon: require('~/assets/images/arrow_2.svg?raw'),
          multiArrowIcon: require('~/assets/images/multi_arrow.svg?raw'),
          largeMultiArrowIcon: require('~/assets/images/multi_arrow_2.svg?raw'),
          multiTopHalfArrowIcon: require('~/assets/images/arrow_top_half.svg?raw'),
          multiBottomHalfArrowIcon: require('~/assets/images/arrow_bottom_half.svg?raw'),
          sliceArrowIcon: require('~/assets/images/arrow_slice_2.svg?raw'),
        }

      }
    },
    computed: {
      directionClass(): string {
        return directionToClass[this.direction];
      },
      spacingClass(): string {
        return iconToSpacingClass[this.icon];
      },
      labelBackgroundClass(): string {
        return labelBackgroundToClass[this.bglabel]
      },
      colorClass(): string {
        return colorToClass[this.color]
      },
      iconImage() {
        const icons: {[key:string]: any} = this.icons;
        const arrowIconName: string = arrowIcon[this.icon];

        return icons[arrowIconName];
      }
    },
  })
</script>

<template>
  <div class="flex justify-center items-center"
       :class="{ 'flex-col xl:flex-row': !mirrored, 'flex-col-reverse xl:flex-row-reverse': mirrored  }">
    <span v-if="label"
          class="block xl:flex-1 whitespace-nowrap rounded-md bg-gradient-to-r text-sm text-white font-semibold uppercase p-2"
          :class="labelBackgroundClass"
    >{{label}}</span>
    <span class="transform origin-center" :class="[directionClass, spacingClass]">
      <i class="transition" :class="colorClass" v-html="iconImage"></i>
    </span>
  </div>
</template>


<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    data() {
      return {
        consumer: {
          title: this.$t('sc.consumer.title'),
          description: this.$t('sc.consumer.description'),
          input: this.$t('sc.consumer.input'),
          output: this.$t('sc.consumer.output'),
          icon: require('~/assets/images/consumer.svg'),
        },
        provider: {
          title: this.$t('sc.provider.title'),
          description: this.$t('sc.provider.description'),
          input: this.$t('sc.provider.input'),
          output: this.$t('sc.provider.output'),
          icon: require('~/assets/images/provider.svg'),
        },
        blackBox: {
          title: this.$t('sc.black_box.title'),
          description: this.$t('sc.black_box.description'),
          curve: this.$t('sc.black_box.curve'),
          icon: require('~/assets/images/curve.svg'),
          xAxis: this.$t('sc.black_box.x_axis'),
          yAxis: this.$t('sc.black_box.y_axis'),
        },

      };
    },
  })
</script>

<template>
  <FlexSection class="items-center text-center">
    <div class="max-w-3xl mx-auto"
         data-sal="slide-up" data-sal-duration="600" data-sal-easing="ease-out-bounce">
      <GradientLabel :label="$t('sc.label')"></GradientLabel>
      <LandingTitle :label="$t('sc.title')" size="lg"></LandingTitle>
      <Paragraph>{{$t('sc.description')}}</Paragraph>
    </div>
    <div class="max-w-5xl w-full flex flex-col xl:flex-row justify-center items-center xl:space-x-4 mt-12">
      <!-- Consumer section -->
      <article class="flex-none basis-1/4 flex flex-col items-center p-4 max-w-48 lg:max-w-64"
               data-sal="slide-left" data-sal-duration="600" data-sal-easing="ease-out-bounce">
        <GlassCard class="w-full flex flex-col items-center space-y-3" size="sm">
          <CardIcon :src="consumer.icon" :label="consumer.title"></CardIcon >
          <CardLabel :label="consumer.title" :show-background="true" class="font-bold text-sm lg:text-md"></CardLabel>
          <p class="text-sm lg:text-md">{{consumer.description}}</p>
        </GlassCard>

      </article>
      <!-- End Consumer section -->
      <!-- BlackBox section -->
      <div class="basis-1/2 flex flex-col xl:flex-row flex-shrink-0 justify-center xl:space-x-4"
           data-sal="slide-up" data-sal-duration="600" data-sal-easing="ease-out-bounce">
        <!-- Left Arrows section -->
        <div class="w-full flex flex-row-reverse xl:(w-auto flex-col) justify-around">
          <DirectionalArrow :label="consumer.input" direction="right" bglabel="secondary" class="w-32"></DirectionalArrow>
          <DirectionalArrow :label="consumer.output" direction="left" bglabel="primary" class="w-32"></DirectionalArrow>
        </div>
        <!-- End Left Arrows section -->
        <GlassCard class="w-full flex flex-col items-center space-y-3 px-4" size="sm">
          <h5 class="font-bold text-md">{{blackBox.title}}</h5>
          <p class="text-md uppercase font-semibold">{{blackBox.curve}}</p>
          <div class="rounded-3xl bg-black bg-opacity-10 w-full text-center p-4 md:px-8">
            <div class="transform origin-bottom-left -translate-x-22 md:-translate-x-28 -rotate-90 mb-2 ml-3 md:-ml-2">
              <p class="text-left text-sm uppercase font-semibold">{{blackBox.yAxis}}</p>
            </div>
            <img :src="blackBox.icon" :alt="blackBox.curve" class="w-38 md:w-48 max-w-full h-auto mx-auto aspect-[4/3]" />
            <div>
              <p class="text-sm uppercase font-semibold">{{blackBox.xAxis}}</p>
            </div>
          </div>
        </GlassCard>
        <!-- Right Arrows section -->
        <div class="w-full flex flex-row-reverse xl:(w-auto flex-col) justify-around">
          <DirectionalArrow :label="provider.input" direction="left" bglabel="secondary" :mirrored="true" class="w-32"></DirectionalArrow>
          <DirectionalArrow :label="provider.output" direction="right" bglabel="primary" :mirrored="true" class="w-32"></DirectionalArrow>
        </div>
        <!-- End Right Arrows section -->
      </div>
      <!-- End BlackBox section -->
      <!-- Producer section -->

      <article class="flex-none basis-1/4 flex flex-col items-center p-4 max-w-48 lg:max-w-64"
               data-sal="slide-right" data-sal-duration="600" data-sal-easing="ease-out-bounce">
        <GlassCard class="w-full flex flex-col items-center space-y-3" size="sm">
          <CardIcon :src="provider.icon" :label="provider.title"></CardIcon>
          <CardLabel :label="provider.title" :show-background="true" class="font-bold text-sm lg:text-md"></CardLabel>
          <p class="text-sm lg:text-md">{{provider.description}}</p>
        </GlassCard>
      </article>
      <!-- End Producer section -->
    </div>

  </FlexSection>
</template>

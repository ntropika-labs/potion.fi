<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    data() {
      return {
        poolsIcon: require('~/assets/images/pools.svg'),
        routerIcon: require('~/assets/images/router.svg'),

      }
    }
  })
</script>

<template>
  <FlexSection class="items-center text-center">
    <div class="max-w-3xl mx-auto" data-sal="slide-right" data-sal-duration="600" data-sal-easing="ease-out-bounce">
      <GradientLabel :label="$t('kelly.label')"></GradientLabel>
      <LandingTitle :label="$t('kelly.title')" size="lg"></LandingTitle>
      <Paragraph>{{$t('kelly.description')}}</Paragraph>
    </div>
    <article class="max-w-5xl mx-auto grid xl:(grid-cols-16 grid-flow-col) gap-2 mt-8">
      <!-- Pool Card -->
      <div class="relative flex items-center justify-center xl:(col-start-1 col-end-4 justify-start)">

        <GlassCard class="min-h-full flex flex-col items-center space-y-3"
                   size="sm"
                   data-sal="slide-left" data-sal-delay="100" data-sal-duration="600" data-sal-easing="ease-out-bounce">
          <CardIcon :src="poolsIcon" :label="$t('kelly.flow_graph.pools.title')" size="2xl"></CardIcon>
          <CardLabel :label="$t('kelly.flow_graph.pools.title')"></CardLabel>
        </GlassCard>
      </div>
      <!-- End Pool Card -->
      <!-- Distribution Arrows -->
      <div class="relative flex items-center justify-center xl:(col-start-4 col-end-8 justify-start)">
        <div class="flex flex-col items-center xl:items-start gap-2">
          <div class="">
            <DirectionalArrow direction="right" icon="top_half" color="primary" class="hidden xl:block w-36"></DirectionalArrow>
            <DirectionalArrow direction="right" icon="slice" color="primary" class="block xl:hidden"></DirectionalArrow>
          </div>
          <div class="flex item-center gap-2 xl:pl-10">
            <CardLabel :label="$t('kelly.flow_graph.router.distribution')" color="primary-to-primary"></CardLabel>
            <DirectionalArrow direction="right" icon="slice" color="primary" class="flex-shrink hidden xl:flex max-w-12"></DirectionalArrow>
          </div>
          <div class="">
            <DirectionalArrow direction="right" icon="bottom_half" color="primary" class="hidden xl:block w-36"></DirectionalArrow>
            <DirectionalArrow direction="right" icon="multiarrow" color="primary" class="block xl:hidden max-w-32"></DirectionalArrow>
          </div>
        </div>
      </div>
      <!-- End Distribution Arrows -->
      <!-- Router Card -->
      <div class="relative flex items-center justify-center xl:(col-start-8 col-end-10 justify-start)">
        <GlassCard class="flex flex-col items-center space-y-3 flex-grow p-2"
                   size="sm"
                   data-sal="slide-left" data-sal-delay="100" data-sal-duration="600" data-sal-easing="ease-out-bounce">
          <CardIcon :src="routerIcon" :label="$t('kelly.flow_graph.router.title')"></CardIcon>
          <CardLabel :label="$t('kelly.flow_graph.router.title')"></CardLabel>
        </GlassCard>
      </div>
      <!-- End Router Card -->
      <!-- Premium Arrows -->
      <div
        class="relative flex items-center justify-center xl:(col-start-10 col-end-14 justify-start)">
        <div class="flex flex-col items-center xl:flex-row gap-2">
          <div>
            <DirectionalArrow direction="right" icon="slice" color="secondary"></DirectionalArrow>
          </div>
          <CardLabel :label="$t('kelly.flow_graph.router.premium')" color="secondary-to-secondary"></CardLabel>
          <div>
            <DirectionalArrow direction="right" color="secondary"></DirectionalArrow>
          </div>
        </div>
      </div>
      <!-- End Premium Arrows -->
      <!-- Demand Card -->
      <div
        class="relative flex justify-center xl:(col-start-14 col-end-17 justify-start)">
        <GlassCard class="min-h-full flex flex-col items-center justify-center space-y-3"
                   size="sm"
                   data-sal="slide-left" data-sal-delay="100" data-sal-duration="600" data-sal-easing="ease-out-bounce">
          <div class="grid grid-rows-2 grid-cols-2 gap-8">
            <img class="relative z-1" src="~/assets/images/demand_user.svg" :alt="$t('kelly.flow_graph.demand.title')">
            <img class="relative z-1" src="~/assets/images/demand_user.svg" :alt="$t('kelly.flow_graph.demand.title')">
            <img class="relative z-1" src="~/assets/images/demand_user.svg" :alt="$t('kelly.flow_graph.demand.title')">
            <img class="relative z-1" src="~/assets/images/demand_user.svg" :alt="$t('kelly.flow_graph.demand.title')">
          </div>

          <CardLabel :label="$t('kelly.flow_graph.demand.title')"></CardLabel>
        </GlassCard>
      </div>
      <!-- End Demand Card -->
    </article>
  </FlexSection>
</template>

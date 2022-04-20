<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    data() {
      return {
        multiArrowIcon: require('~/assets/images/multi_arrow.svg?raw'),
        devIcon: require('~/assets/images/core.svg'),
        keyIcon: require('~/assets/images/key.svg'),
        userIcon: require('~/assets/images/demand_user.svg'),
        lpIcon: require('~/assets/images/provider.svg'),
        consumerIcon: require('~/assets/images/consumer.svg'),
      }
    }
  })
</script>

<template>
  <FlexSection class="items-center text-center">
    <div class="max-w-3xl mx-auto" data-sal="slide-right" data-sal-duration="600" data-sal-easing="ease-out-bounce">
      <GradientLabel :label="$t('unlock.label')"></GradientLabel>
      <LandingTitle :label="$t('unlock.title')" size="lg"></LandingTitle>
      <div class="mb-6">
        <Paragraph v-for="(desc,index) in $t('unlock.descriptions')" :key="`unlock-description-${index}`"
                   class="mb-0 mx-auto"
        >{{desc}}
        </Paragraph>
      </div>
      <LandingButton :label="$t('unlock.potion_unlock.label')" :href="$t('unlock.potion_unlock.url')" mode="link" color="secondary-o" target="_blank"></LandingButton>

    </div>
    <article class="max-w-5xl mx-auto grid xl:(grid-cols-16 grid-flow-col) gap-2 mt-8">
      <!-- Dev Card -->
      <div class="relative grid place-content-center xl:(col-start-1 col-end-2)">

        <GlassCard class="min-h-full flex flex-col items-center space-y-3"
                   size="sm"
                   data-sal="slide-left" data-sal-delay="100" data-sal-duration="600" data-sal-easing="ease-out-bounce">
          <CardIcon :src="devIcon" :label="$t('unlock.flow_graph.devs.title')" size="sm"></CardIcon>
          <CardLabel :label="$t('unlock.flow_graph.devs.title')"></CardLabel>
        </GlassCard>
      </div>
      <!-- Dev Pool Card -->
      <!-- Arrow -->
      <div class="relative flex items-center justify-center xl:(col-start-2 col-end-3 pl-2)">
        <DirectionalArrow direction="right" color="primary"></DirectionalArrow>
      </div>
      <!-- End Arrow -->
      <!-- IPFS Card -->
      <div class="relative grid place-content-center xl:(col-start-3 col-end-6)">
        <div class="min-h-full flex flex-col items-center space-y-3 rounded-lg border-2 border-white border-dashed border-opacity-30 p-4"
             data-sal="slide-left" data-sal-delay="100" data-sal-duration="600" data-sal-easing="ease-out-bounce">
          <div class="space-y-2">
            <article v-for="(feature, index) in $t('unlock.flow_graph.ipfs.features')" :key="`ipfs-features-${index}`">
              <CardLabel :label="feature.title" :uppercase="false" color="light"></CardLabel>
            </article>
          </div>
          <CardLabel :label="$t('unlock.flow_graph.ipfs.title')"></CardLabel>
        </div>
      </div>
      <!-- End IPFS Card -->
      <!-- Arrow -->
      <div class="relative flex items-center justify-center xl:(col-start-6 col-end-7)">
        <DirectionalArrow direction="right" color="primary"></DirectionalArrow>
      </div>
      <!-- End Arrow -->
      <!-- Encryption Card -->
      <div
        class="relative grid place-content-center xl:(col-start-7 col-end-10)">
        <GlassCard class="min-h-full flex flex-col items-center space-y-3"
                   size="sm"
                   data-sal="slide-left" data-sal-delay="100" data-sal-duration="600" data-sal-easing="ease-out-bounce">
          <div class="grid grid-rows-2 grid-cols-2 gap-8">
            <CardIcon :src="keyIcon" :label="$t('unlock.flow_graph.encrypt.title')" size="sm"></CardIcon>
            <CardIcon :src="keyIcon" :label="$t('unlock.flow_graph.encrypt.title')" size="sm"></CardIcon>
            <CardIcon :src="keyIcon" :label="$t('unlock.flow_graph.encrypt.title')" size="sm"></CardIcon>
            <CardIcon :src="keyIcon" :label="$t('unlock.flow_graph.encrypt.title')" size="sm"></CardIcon>
          </div>

          <CardLabel :label="$t('unlock.flow_graph.encrypt.title')" :uppercase="false"></CardLabel>
        </GlassCard>
      </div>
      <!-- End Encryption Card -->
      <!-- Arrows -->
      <div class="relative flex items-center justify-center xl:(col-start-10 col-end-11 pl-4)">
        <!--<div class="flex justify-center items-center gap-4 w-32 h-32">
          <i class="transform my-4 rotate-90 xl:rotate-0" v-html="multiArrowIcon"></i>
        </div>-->
        <DirectionalArrow direction="up" icon="large_multiarrow" color="secondary"></DirectionalArrow>
      </div>
      <!-- End Arrows -->
      <!-- Actors Card -->
      <div class="relative grid place-content-center xl:(col-start-11 col-end-13)">
        <GlassCard class="flex items-center space-x-4 xl:(flex-col space-x-0 space-y-3)"
                   size="sm"
                   data-sal="slide-left" data-sal-delay="100" data-sal-duration="600" data-sal-easing="ease-out-bounce">
          <CardIcon :src="userIcon" :label="$t('unlock.flow_graph.devs.title')" size="sm"></CardIcon>
          <CardIcon :src="consumerIcon" :label="$t('unlock.flow_graph.devs.title')" size="sm"></CardIcon>
          <CardIcon :src="lpIcon" :label="$t('unlock.flow_graph.devs.title')" size="sm"></CardIcon>
          <CardIcon :src="userIcon" :label="$t('unlock.flow_graph.devs.title')" size="sm"></CardIcon>
        </GlassCard>
      </div>
      <!-- End Actors Card -->
      <!-- Arrow -->
      <div class="relative flex items-center justify-center xl:(col-start-13 col-end-14 -ml-6)">
        <DirectionalArrow direction="right" color="secondary"></DirectionalArrow>
      </div>
      <!-- End Arrow -->
      <!-- Consensus Card -->
      <div class="relative grid place-content-center xl:(col-start-14 col-end-17)">
        <div class="min-h-full flex flex-col items-center space-y-3"
             data-sal="slide-left" data-sal-delay="100" data-sal-duration="600" data-sal-easing="ease-out-bounce">
          <CardLabel :label="$t('unlock.flow_graph.cooperation.title')" :uppercase="false" color="primary-to-primary"
                     class="p-3 max-w-36"></CardLabel>
        </div>
      </div>
      <!-- End Consensus Card -->
    </article>
  </FlexSection>
</template>

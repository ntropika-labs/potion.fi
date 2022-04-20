<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<template>
  <FlexSection class="items-center text-center max-w-3xl mx-auto"
               data-sal="slide-up" data-sal-duration="600" data-sal-easing="ease-out-bounce">
    <GradientLabel :label="$t('mission.label')" class="mb-0"></GradientLabel>
    <LandingTitle :label="$t('mission.title')" size="lg"></LandingTitle>
    <Paragraph>{{$t('mission.description')}}</Paragraph>
  </FlexSection>
</template>

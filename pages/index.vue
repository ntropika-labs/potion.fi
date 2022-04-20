<script lang="ts">
import Vue from 'vue'
import sal from 'sal.js';

export default Vue.extend({
  mounted() {
    sal();
  }
})
</script>

<template>
  <main class="px-6 md:px-12 bg-deep-black-800 text-white font-poppins main-bg-texture overflow-hidden">
    <div class="mx-auto container relative">
      <LandingHeader></LandingHeader>
      <HeroBanner></HeroBanner>
      <div id="content-wrap" class="space-y-48">
        <Mission></Mission>
        <Buyer></Buyer>
        <Lp></Lp>
        <SmartContract></SmartContract>
        <BondingCurve></BondingCurve>
        <Analytics></Analytics>
        <Kelly></Kelly>
        <Unlock></Unlock>
        <Investors></Investors>
      </div>
      <LandingFooter></LandingFooter>
    </div>
  </main>
</template>


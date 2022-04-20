<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    question: {
      type: String,
      default: '',
    },
    answer: {
      type: String,
      default: '',
    },
    number: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      open: false
    };
  },
  computed: {
    toggleLabel (): string {
      return this.open ? this.$tc('actions.close') : this.$tc('actions.open');
    }
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
  },
})
</script>

<template>
  <GlassCard size="sm"  >
    <section class="grid grid-cols-[3ch,1fr,3ch] items-center cursor-pointer"  @click="toggle">
      <LandingTitle size="xs" :label="`${number}.`" class="mb-0" weight="extralight"></LandingTitle>
      <LandingTitle size="xs" :label="question" class="mb-0" weight="extralight"></LandingTitle>
      <LandingButton size="icon" color="transparent" label="" mode="button" :title="toggleLabel" >
        <CaretDown class="w-4 transform transition-transform" :class="{ 'rotate-180': open }"></CaretDown>
      </LandingButton>
    </section>
    <Paragraph :class="open ?'mt-4 max-h-[500px]' : 'max-h-0'" class="transition-all overflow-hidden">{{answer}}</Paragraph>
  </GlassCard>
</template>

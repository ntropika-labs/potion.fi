<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      qa: [
        'how_potion_works',
        'lp_earnings',
        'how_is_potion_different',
        'who_owns_potion',
        'insurance_cost',
        'who_is_kelly'
      ],
    };
  },
})
</script>

<template>
  <FlexSection class="items-center">
    <GradientLabel :label="$t('faq.label')"></GradientLabel>
    <LandingTitle :label="$t('faq.title')"></LandingTitle>
    <img src="~/assets/images/oracle.webp" alt="faq" title="faq" />
    <div class="grid gap-6">
      <FaqCard v-for="(key, index) in qa" :key="`faq-${index}`" :question="$t(`faq.questions.${key}`)" :answer="$t(`faq.answers.${key}`)" :number="index + 1"></FaqCard>
    </div>
  </FlexSection>
</template>

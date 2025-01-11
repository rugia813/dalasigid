<template>
  <div class="flex flex-col">
    <HeroSection />
    <AboutSection />
    <AwardsSection />
    <IngredientsSection />
    <TeamSection />
    <BrandExperienceSection />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeroSection from './sections/Hero.vue'
import AboutSection from './sections/About.vue'
import AwardsSection from './sections/Award.vue'
import IngredientsSection from './sections/Ingredient.vue'
import TeamSection from './sections/Team.vue'
import BrandExperienceSection from './sections/Brand.vue'

export default defineComponent({
  name: 'LandingPage',
  components: {
    HeroSection,
    AboutSection,
    AwardsSection,
    IngredientsSection,
    TeamSection,
    BrandExperienceSection
  }
})
</script>
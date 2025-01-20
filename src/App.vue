<template>
  <Navbar />
  <div class="flex flex-col">
    <HeroSection />
    <AboutSection />
    <div class="relative lg:h-[12rem]">
      <AwardsSection
        class="
          lg:w-[calc(100%-6.13rem)] w-full lg:h-[27rem]
          lg:absolute top-[-50%] right-0
        "
      />
    </div>
    <IngredientsSection />
    <div class="relative lg:h-[12rem]">
      <TeamSection
        class="
          lg:w-[calc(100%-6.13rem)] w-full lg:h-[36rem]
          lg:absolute top-[-180%] left-0
        "
      />
    </div>
    <BrandExperienceSection />
    <Showcase />
  </div>
</template>

<script setup lang="ts">
import HeroSection from './sections/Hero.vue'
import AboutSection from './sections/About.vue'
import AwardsSection from './sections/Award.vue'
import IngredientsSection from './sections/Ingredient.vue'
import TeamSection from './sections/Team.vue'
import BrandExperienceSection from './sections/Brand.vue'
import Showcase from './sections/Showcase.vue'
import Navbar from './components/Navbar.vue'

</script>
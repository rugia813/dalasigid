<template>
  <section
    class="flex relative flex-col items-center px-16 pt-20 pb-40 w-full rounded-none max-w-[1300px] min-h-[598px] bg-gradient-to-b from-neutral-900 to-neutral-800"
    aria-labelledby="team-section"
  >
    <div class="relative mb-0 w-full max-w-[1056px]">
      <div class="flex gap-5 max-md:flex-col">
        <TeamMember
          :member="teamLead"
          class="w-[26%] max-md:w-full"
        />
        <div class="flex flex-col ml-5 w-[74%] max-md:ml-0 max-md:w-full">
          <TeamQuote :quote="quote" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TeamMember from '../components/team/TeamMember.vue'
import TeamQuote from '../components/team/TeamQuote.vue'
import type { TeamMemberType, Quote } from './types'

const teamLead = ref<TeamMemberType>({
  name: 'Tony Ng',
  title: 'Founder & Creative Director',
  image: '/images/tony-ng.jpg'
})

const quote = ref<Quote>({
  text: `A great digital work isn't about designing beautiful pages purely. It is about context - how do we deliver the right experience to the right person at the right time. The most important thing is that your work can engage customers at anytime, anywhere and let users experience an entire amazing digital journey.`,
  highlightedText: 'right experience to the right person at the right time'
})
</script>
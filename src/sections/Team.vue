<template>
  <section
    class="z-10 self-end px-16 py-16 lg:mt-16 max-w-full bg-white lg:rounded-[40px] !rounded-tl-none w-[1342px] max-md:px-5"
    aria-labelledby="team-section"
  >
    <div class="relative mb-0 w-full max-w-[1056px]">
      <div class="flex gap-5 max-md:flex-col">
        <TeamMember
          :member="teamLead"
          class="w-[26%] max-md:w-full"
        />
        <div class="flex flex-col ml-5 w-[74%] max-md:ml-0 max-md:w-full">
          <!-- quote -->
          <svg class="mx-auto" xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 90 90" fill="none">
            <path d="M71.1973 36.8799C71.016 34.9203 71.1547 29.5933 76.2578 22.1857C76.6438 21.6267 76.5738 20.8728 76.0944 20.3936C74.0139 18.313 72.7257 17.0001 71.8222 16.0814C70.6342 14.8701 70.0918 14.3181 69.298 13.5984C68.768 13.122 67.966 13.1137 67.4304 13.5807C58.5356 21.3206 48.6561 37.3138 50.0857 56.908C50.9234 68.4133 59.3156 76.7644 70.0397 76.7644C81.0451 76.7644 89.999 67.8119 89.999 56.8063C89.999 46.1894 81.666 37.4827 71.1973 36.8799ZM70.0397 73.9519C60.8303 73.9519 53.6192 66.6981 52.89 56.7048C52.89 56.7048 52.89 56.7048 52.89 56.7034C51.2818 34.6662 64.3816 20.3524 68.3395 16.5621C68.7254 16.9425 69.1662 17.3901 69.8158 18.052C70.5985 18.8485 71.6698 19.9389 73.2902 21.565C67.0953 31.1093 68.264 37.9098 68.7761 38.8849C69.0193 39.3477 69.5178 39.6595 70.0397 39.6595C79.4947 39.6595 87.1865 47.3512 87.1865 56.8063C87.1865 66.2601 79.4947 73.9519 70.0397 73.9519Z" fill="white"/>
            <path d="M21.2535 36.8798C21.0709 34.9256 21.2054 29.6027 26.3141 22.1856C26.6987 21.6266 26.6299 20.8727 26.1507 20.3935C24.0742 18.317 22.7875 17.0055 21.8852 16.0868C20.6933 14.8728 20.1493 14.3193 19.3557 13.5983C18.8255 13.1219 18.0235 13.115 17.488 13.5792C8.59321 21.3191 -1.28767 37.3097 0.139115 56.9079V56.9093C0.97963 68.4132 9.37312 76.7643 20.0972 76.7643C31.1028 76.7643 40.0566 67.8118 40.0566 56.8062C40.0566 46.188 31.7235 37.48 21.2535 36.8798ZM20.0972 73.9518C10.8893 73.9518 3.67401 66.698 2.94346 56.7033V56.7047C1.33949 34.662 14.4393 20.3508 18.397 16.562C18.7843 16.9424 19.2266 17.3928 19.8775 18.0561C20.6588 18.8526 21.7287 19.9416 23.3465 21.5649C17.1515 31.1106 18.3202 37.9097 18.8324 38.8834C19.0755 39.3462 19.5753 39.6594 20.0972 39.6594C29.5524 39.6594 37.2441 47.3511 37.2441 56.8062C37.2441 66.26 29.5524 73.9518 20.0972 73.9518Z" fill="white"/>
          </svg>
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
import tony from '@/assets/tony.png'
const teamLead = ref({
  name: 'Tony Ng',
  title: 'Founder & Creative Director',
  image: tony
})

const quote = ref({
  text: `A great digital work isn't about designing beautiful pages purely. It is about context - how do we deliver the right experience to the right person at the right time. The most important thing is that your work can engage customers at anytime, anywhere and let users experience an entire amazing digital journey.`,
  highlightedText: 'right experience to the right person at the right time'
})
</script>

<style scoped>
section {
  background-image: url('@/assets/shutterstock_675737842 1.png');
  background-size: cover;
}
</style>
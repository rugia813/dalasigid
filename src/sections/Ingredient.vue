<template>
  <section
    class="
      flex flex-col justify-center items-center self-stretch
      px-20 pb-96 pt-80 w-full
      bg-[#26C6D0] lg:rounded-t-[40px]
      max-lg:px-5 max-lg:py-24
    "
    aria-labelledby="ingredients-title"
  >
    <div class="flex flex-col items-center mb-0 w-full max-w-[1130px] max-md:mb-2.5">
      <div class="flex gap-3 mt-10 ml-4 max-w-full text-white">
        <h3 id="ingredients-title">OUR INGREDIENTS</h3>
        <div class="flex shrink-0 self-start mt-5 w-2.5 h-2.5 bg-rose-400 rounded-full"></div>
      </div>
      <div class="flex mt-2">
        <div class="underline2 w-[191px] h-[13px]" />
        <div class="underline2 w-[191px] h-[13px] -ml-3" />
      </div>

      <!-- <img
        src="/images/ingredients-decoration.svg"
        alt=""
        loading="lazy"
        class="object-contain mt-2 ml-3.5 max-w-full aspect-[28.57] w-[369px]"
        aria-hidden="true"
      /> -->

      <p class="mt-11 text-base tracking-wider leading-7 text-center text-white max-md:mt-10">
        {{ description }}
      </p>

      <button
        class="
          flex gap-3.5 items-center
          px-14 py-10 mt-14
          text-white
          bg-[#585880] rounded-sm hover:bg-[#585880]/80
          max-md:px-5 max-md:mt-10
          transition-all duration-300
        "
        aria-label="OUR SERVICES"
      >
        <span class="text-service grow text-nowrap">OUR SERVICES</span>
        <div class="border border-white w-[4.2875rem]" />
      </button>

      <div class="grid grid-cols-3 gap-5 mt-20 w-full max-md:grid-cols-1 max-md:mt-10">
        <IngredientCard
          v-for="ingredient in ingredients"
          :key="ingredient.id"
          v-bind="ingredient"
          @view-more="handleViewMore(ingredient.id)"
        />
      </div>

      <button
        class="orange-underline mt-24 caption text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-colors max-md:mt-10"
        @click="handleViewAllClick"
      >
        VIEW MORE DIGISALAD'S INGREDIENTS
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import IngredientCard from '../components/ingredient/IngredientCard.vue'
import Award from './Award.vue'
import icon1 from "@/assets/menu/icons/Group 21.png"
import icon2 from "@/assets/menu/icons/tomato.svg"
import icon3 from "@/assets/menu/icons/Group 43.png"
import icon4 from "@/assets/menu/icons/Group 28.png"
import icon5 from "@/assets/menu/icons/Group 25.png"

const description = ref(`
  Cras quis nulla commodo, aliquam lectus sed, blandit augue.
  Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta.
  Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor.
  Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc.
  Donec elit ante, eleifend a dolor et, venenatis facilisis dolor.
  In feugiat orci odio, sed lacinia sem elementum quis.
  Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus.
  Cras lobortis molestie faucibus.
`)
type Ingredient = {
  id: number
  title: string
  icon: string
  description: string
}
const ingredients = ref<Ingredient[]>([
  {
    id: 1,
    title: 'UX Design',
    icon: icon1,
    description: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.'
  },
  {
    id: 2,
    title: 'UI Design',
    icon: icon2,
    description: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.'
  },
  {
    id: 3,
    title: 'Website Development',
    icon: icon3,
    description: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.'
  },
  {
    id: 4,
    title: 'Mobile App Development',
    icon: icon4,
    description: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.'
  },
  {
    id: 5,
    title: 'Ecommerce',
    icon: icon5,
    description: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.'
  },
  {
    id: 6,
    title: 'Customer Loyalty',
    icon: icon1,
    description: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.'
  },
  {
    id: 7,
    title: 'Digital Transformation',
    icon: icon2,
    description: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.'
  },
  {
    id: 8,
    title: 'Digital Marketing',
    icon: icon3,
    description: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.'
  },
  {
    id: 9,
    title: 'Branding',
    icon: icon4,
    description: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.'
  }
])

const handleServicesClick = () => {
  window.location.href = '/services'
}

const handleViewMore = (id: number) => {
  window.location.href = `/ingredients/${id}`
}

const handleViewAllClick = () => {
  window.location.href = '/ingredients'
}
</script>

<style scoped>
.text-service {
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.13888rem;
}



.orange-underline {
  padding: 0.1rem .5rem;
	background-image: linear-gradient(to right, #FFBC58, #FFBC58);
	background-size: 100% 0.625rem;
	background-repeat: no-repeat;
	background-position: 0 70%;
	/* transition: background-size 0.3s ease-in-out; */
}
</style>
<template>
  <section
    class="flex flex-col justify-center items-center self-stretch px-20 py-96 w-full bg-teal-400 rounded-none max-md:px-5 max-md:py-24"
    aria-labelledby="ingredients-title"
  >
    <div class="flex flex-col items-center mb-0 w-full max-w-[1130px] max-md:mb-2.5">
      <div class="flex gap-3.5 ml-5 max-w-full text-3xl font-bold text-white tracking-[3.64px] w-[324px]">
        <h2 id="ingredients-title">OUR INGREDIENTS</h2>
        <div
          class="flex shrink-0 self-start mt-4 w-2.5 h-2.5 bg-rose-400 rounded-full"
          aria-hidden="true"
        ></div>
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
        class="flex gap-3.5 px-8 py-9 mt-14 text-base font-bold text-white bg-slate-600 rounded-sm tracking-[2.22px] w-[294px] hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 transition-colors max-md:px-5 max-md:mt-10"
        @click="handleServicesClick"
      >
        <span class="grow">OUR SERVICES</span>
        <!-- <img
          src="/images/arrow-right.svg"
          alt=""
          class="object-contain shrink-0 my-auto aspect-[35.71] w-[71px]"
          aria-hidden="true"
        /> -->
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
        class="mt-24 text-lg font-bold text-white uppercase tracking-[2px] hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 transition-colors max-md:mt-10"
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
import type { Ingredient } from './types'

const description = ref(`Cras quis nulla commodo, aliquam lectus sed, blandit augue.
  Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta.
  Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis.
  Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci.
  Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis
  facilisis dolor.`)

const ingredients = ref<Ingredient[]>([
  {
    id: 1,
    title: 'UX Design',
    icon: '/images/ux-icon.svg',
    description: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.'
  },
  {
    id: 2,
    title: 'UI Design',
    icon: '/images/ui-icon.svg',
    description: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.'
  },
  {
    id: 3,
    title: 'Website Development',
    icon: '/images/web-icon.svg',
    description: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.'
  },
  {
    id: 4,
    title: 'Mobile App Development',
    icon: '/images/mobile-icon.svg',
    description: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.'
  },
  {
    id: 5,
    title: 'Ecommerce',
    icon: '/images/ecommerce-icon.svg',
    description: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.'
  },
  {
    id: 6,
    title: 'Customer Loyalty',
    icon: '/images/loyalty-icon.svg',
    description: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.'
  },
  {
    id: 7,
    title: 'Digital Transformation',
    icon: '/images/transformation-icon.svg',
    description: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.'
  },
  {
    id: 8,
    title: 'Digital Marketing',
    icon: '/images/marketing-icon.svg',
    description: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.'
  },
  {
    id: 9,
    title: 'Branding',
    icon: '/images/branding-icon.svg',
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
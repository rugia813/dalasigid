<template>
  <section
    class="flex flex-col self-center mt-12 lg:mt-60 mb-32 w-full max-w-[1040px] text-neutral-800"
    aria-labelledby="brand-title"
  >
    <div class="flex gap-6 self-center max-md:w-min text-3xl font-bold tracking-[3.64px] max-w-[80%]">
      <h2 id="brand-title">OUR BRAND EXPERIENCE</h2>
      <div class="flex shrink-0 self-start mt-4 w-2.5 h-2.5 bg-rose-400 rounded-full"></div>
    </div>
    <div class="flex mt-2 mx-auto max-w-[80%]">
      <div class="underline w-[191px] h-[13px]" />
      <div class="underline w-[191px] h-[13px] -ml-3" />
      <div class="underline w-[191px] h-[13px] -ml-3" />
    </div>


    <p class="mx-6 mt-14 text-base tracking-wider leading-6 text-center">
      {{ description }}
    </p>

    <!-- <BrandGrid :brands="brands" /> -->
    <img
      src="@/assets/brands.png"
      alt=""
      loading="lazy"
      class="object-contain self-center mt-2"
      aria-hidden="true"
    />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BrandGrid from '../components/brand/BrandGrid.vue'
import type { Brand } from './types'

const description = ref(`Cras quis nulla commodo, aliquam lectus sed, blandit augue.
  Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta.
  Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis.
  Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci.
  Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis
  facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis.
  Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus,
  ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.`)

const brands = ref<Brand[]>([
  {
    id: 1,
    name: 'Brand 1',
    logo: '/images/brand-1.svg'
  },
  {
    id: 2,
    name: 'Brand 2',
    logo: '/images/brand-2.svg'
  },
  {
    id: 3,
    name: 'Brand 3',
    logo: '/images/brand-3.svg'
  },
  {
    id: 4,
    name: 'Brand 4',
    logo: '/images/brand-4.svg'
  },
  {
    id: 5,
    name: 'Brand 5',
    logo: '/images/brand-5.svg'
  },
  {
    id: 6,
    name: 'Brand 6',
    logo: '/images/brand-6.svg'
  }
])
</script>
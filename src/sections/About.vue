<template>
  <section class="flex overflow-hidden flex-col items-center pb-24 bg-zinc-100">
    <div class="flex gap-6 mt-10 ml-4 max-w-full text-3xl font-bold text-neutral-800 tracking-[3.64px]">
      <h2>ABOUT DIGISALAD</h2>
      <div class="flex shrink-0 self-start mt-4 w-2.5 h-2.5 bg-rose-400 rounded-full"></div>
    </div>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/0ccfe98b796a46c7b321e819adeef68c/2d8186f3a180855bca0dbc6b21fd2226c8400d8e4f17f78180e8e8c34d3b33ce?apiKey=0ccfe98b796a46c7b321e819adeef68c&"
      alt="Decorative line"
      class="object-contain mt-2 ml-3.5 max-w-full aspect-[28.57] w-[369px]"
    />
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/0ccfe98b796a46c7b321e819adeef68c/23b1bb16cc23bd39376c818e78553ef679b2a256cb4c0324dd267b9a0dc107bc?apiKey=0ccfe98b796a46c7b321e819adeef68c&"
      alt="About section illustration"
      class="object-contain mt-16 max-w-full aspect-[1.76] w-[960px] max-md:mt-10"
    />
    <p class="mt-8 text-base tracking-wider leading-7 text-center text-neutral-800 max-md:max-w-full">
      Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.
    </p>
    <button
      class="
        flex gap-3.5 items-center
        px-6 py-9 mt-14 max-w-full text-base font-bold text-white bg-[#26C6D0] rounded-sm
        w-[223px] max-md:px-5 max-md:mt-10
      "
      aria-label="View more about DigiSalad"
    >
      <span class="grow">VIEW MORE</span>
      <div class="border border-white w-[54px]" />
    </button>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AboutSection'
})
</script>
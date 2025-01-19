<template>
  <section class="flex overflow-hidden flex-col items-center pb-36 bg-zinc-100">
    <div class="flex gap-6 mt-10 ml-4 max-w-full text-3xl font-bold text-neutral-800 tracking-[3.64px]">
      <h2>ABOUT DIGISALAD</h2>
      <div class="flex shrink-0 self-start mt-4 w-2.5 h-2.5 bg-rose-400 rounded-full"></div>
    </div>
    <div class="flex mt-2">
      <div class="underline w-[191px] h-[13px]" />
      <div class="underline w-[191px] h-[13px] -ml-3" />
    </div>
    <div class="max-w-[60rem] w-full px-2 mt-16 flex items-center flex-col">
      <iframe
        src="https://www.youtube.com/embed/IeIRJ9jZ5Ro"
        width="100%" height="544"
        title="" frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      >
      </iframe>
      <p class="
        mt-8
        text-base tracking-wider leading-7 text-center text-neutral-800 text-wrap
        max-md:max-w-full
      ">
        Cras quis nulla commodo, aliquam lectus sed, blandit augue.
        Cras ullamcorper bibendum bibendum.
        Duis tincidunt urna non pretium porta.
        Nam condimentum vitae ligula vel ornare.
        Phasellus at semper turpis. Nunc eu tellus tortor.
        Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc.
        Donec elit ante, eleifend a dolor et, venenatis facilisis dolor.
        In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus.
        Cras lobortis molestie faucibus.
      </p>
      <button
        class="
          flex gap-3.5 items-center
          px-6 py-9 mt-14 max-w-full w-[223px]
          text-base font-bold text-white
          bg-[#26C6D0] rounded-sm hover:bg-[#26C6D0]/80
          max-md:px-5 max-md:mt-10
          transition-all duration-300
        "
        aria-label="View more about DigiSalad"
      >
        <span class="grow">VIEW MORE</span>
        <div class="border border-white w-[54px]" />
      </button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AboutSection'
})
</script>
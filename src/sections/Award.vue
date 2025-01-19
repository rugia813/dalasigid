<template>
  <section class="z-10 self-end px-16 py-16 mt-16 max-w-full bg-white lg:rounded-[40px] w-[1342px] max-md:px-5 max-md:mt-10" aria-labelledby="awards-title">
    <div class="flex gap-5 max-md:flex-col">
      <div class="flex flex-col w-2/5 max-md:ml-0 max-md:w-full">
        <div class="flex flex-col items-start w-full text-neutral-800 max-md:mt-10">
          <div class="flex gap-2.5 ml-6 text-3xl font-bold whitespace-nowrap tracking-[3.64px] max-md:ml-2.5">
            <h2 id="awards-title">AWARDS</h2>
            <div class="flex shrink-0 self-start mt-4 w-2.5 h-2.5 bg-rose-400 rounded-full" aria-hidden="true"></div>
          </div>
          <div
            class="underline mt-2 max-w-full aspect-[14.71] w-[191px]"
          />
          <p class="self-stretch mt-8 text-base tracking-wider leading-7">
            Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc.
          </p>
        </div>
      </div>
      <div class="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
        <AwardsGrid />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AwardsGrid from '../components/award/AwardsGrid.vue'
</script>
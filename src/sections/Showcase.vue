<template>
  <section class="showcase-section relative px-16 py-24 rounded-b-[60px]">
    <div class="carousel-wrapper relative flex items-center justify-center max-w-[1440px] w-full m-auto overflow-hidden">
      <!-- Left Button -->
      <button @click="prevSlide" class="control-button left-button"><</button>

      <!-- Slides -->
      <div
        class="carousel-slides flex transition-transform duration-500 ease-in-out"
        :style="{ transform: `translateX(-${activeSlide * 100}%)` }"
      >
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="carousel-slide flex-shrink-0 w-full px-6"
        >
          <!-- image -->
          <div class="slide-content bg-white shadow-lg rounded-[30px] overflow-hidden relative">
            <div class="slide-images relative w-[33.75rem] h-[33.75rem] bg-cover" :style="`background: url(${slide.image})`">
              <!-- <img
                :src="slide.image"
                :alt="slide.alt"
                class="project-image w-full rounded-lg"
              /> -->
            </div>
          </div>
          <!-- text -->
          <div class="highlighted-showcase ml-10">
            <div class="text-highlight">HIGHLIGHTED SHOWCASE</div>
            <p class="text-title teal-underline red-dot relative">{{ slide.title }}</p>
            <p class="text-content mt-2 max-w-[27rem]">{{ slide.description }}</p>
          </div>
        </div>
      </div>

      <!-- Right Button -->
      <button @click="nextSlide" class="control-button right-button">></button>

      <!-- page nums -->
      <div class="absolute right-0 top-0 text-white text-base font-semibold] w-[2.125rem] h-[2.125rem]">
        <div class="">0{{ activeSlide + 1 }}</div>
        <svg class="absolute top-2" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path d="M35 1L1 35" stroke="#26C6D0" stroke-linecap="square"/>
        </svg>
        <div class="text-right">0{{ slides.length }}</div>
      </div>
    </div>

    <!-- view project -->
    <button
      class="
        view-project
        flex gap-3.5 items-center
        px-16 py-16 !mt-0 mx-auto -translate-y-10
        w-[18.8rem] h-[8.75rem]
        text-base font-bold text-white
        bg-[#26C6D0] hover:bg-[#26C6D0]/80
        max-md:px-5
        transition-all duration-300
      "
    >
      <span class="grow text-nowrap">VIEW PROJECT</span>
      <div class="border border-white w-[54px]" />
    </button>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import preview from '@/assets/showcase_preview.png';

const slides = ref([
  {
    image: preview,
    alt: 'Slide 1',
    title: 'LP Club Mobile App',
    description: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.',
  },
  {
    image: preview,
    alt: 'Slide 2',
    title: 'E-Commerce Platform',
    description: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.',
  },
  {
    image: preview,
    alt: 'Slide 3',
    title: 'Portfolio Showcase',
    description: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.',
  },
]);

const activeSlide = ref(0);

const prevSlide = () => {
  activeSlide.value =
    (activeSlide.value - 1 + slides.value.length) % slides.value.length;
};

const nextSlide = () => {
  activeSlide.value = (activeSlide.value + 1) % slides.value.length;
};
</script>

<style scoped>
.showcase-section {
  background-image: url(@/assets/showcase_bg.png);
  background-color: rgb(41, 41, 41);
  background-repeat: no-repeat;
  background-size: cover;
}

.carousel-wrapper {
  position: relative;
  display: flex;
  width: 100%;
  overflow: hidden;
}

.carousel-slides {
  display: flex;
  width: 100%;
}

.carousel-slide {
  flex: 0 0 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slide-content {
  max-width: 700px;
  position: relative;
}

.text-highlight {
  color: #FFF;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.13888rem;
}
.text-title {
  color: #FFF;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.22725rem;
}
.text-content {
  color: #FFF;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; /* 150% */
  letter-spacing: 0.0625rem;
}

.image-overlay img {
  border-radius: 50%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.control-button {
  width: 3.5rem;
  height: 3.5rem;
  font-size: 36px;
  line-height: 1rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #26C6D0;
  color: white;
  border: none;
  border-radius: 100%;
  padding: 12px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.control-button:hover {
  background: #2de3f0;
}

.control-button:active {
  background: #1f99a1;
}

.left-button {
  left: 20px;
}

.right-button {
  right: 20px;
}

.view-project {
  margin-top: 20px;
  padding: 10px 25px;
  background-color: #00bcd4;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.view-project:hover {
  background-color: #0097a7;
}
</style>

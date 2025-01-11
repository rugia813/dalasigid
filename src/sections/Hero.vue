<template>
  <section class="relative" aria-labelledby="hero-title">
		<!-- BG -->
		<div class="relative h-screen overflow-hidden rounded-bl-[50px] rounded-br-[50px]">
			<img
				loading="lazy"
				src="@/assets/BG.png"
				alt="Hero background"
				class="object-cover h-screen w-screen"
			/>
			<div data-vbg="https://www.youtube.com/watch?v=8_4JRK4QkqU" class="absolute "></div>
		</div>

		<!-- Title -->
    <div id="hero-title" class="
			absolute top-0 left-0 z-10 flex flex-col justify-center w-full h-full
		">
			<img src="@/assets/logo.svg" alt="Logo" class="" width="198" height="88" />
      <div class="hero-text">WE CREATE <br> AMAZING DIGITAL <br> EXPERIENCES</div>
    </div>
  </section>
</template>

<script setup lang="ts">
import 'youtube-background';
import { onMounted } from 'vue';

onMounted(() => {
	// @ts-expect-error
	const videoBackgrounds = new VideoBackgrounds('[data-vbg]');
});
</script>

<style>

.hero-text {
	color: #FFF;
	font-size: 2.375rem;
	font-style: normal;
	font-weight: 700;
	line-height: 4.375rem; /* 184.211% */
	letter-spacing: 0.57294rem;
}
</style>
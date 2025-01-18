<template>
	<section class="hero-section relative h-screen mb-[5.375rem]">
		<!-- BG -->
		<div class="absolute h-screen overflow-hidden rounded-bl-[50px] rounded-br-[50px]">
			<img loading="lazy" src="@/assets/BG.png" alt="Hero background" class="object-cover h-screen w-screen" />
			<div data-vbg="https://www.youtube.com/watch?v=8_4JRK4QkqU" class="absolute "></div>
		</div>

		<!-- Title -->
		<div id="hero-title" class="flex pt-[11.31rem] h-full relative px-2 overflow-hidden">
			<!-- Left text -->
			<div class="flex flex-col items-center gap-[1.53rem] max-w-[4rem] w-full">
				<div class="left-text">DIGITAL AGENCY</div>
				<div class="line bg-white"></div>
			</div>

			<!-- Main text -->
			<div class="flex flex-col md:ml-[min(7.53vw,9.03rem)]">
				<InlineSvg :src="logo" class="w-[198px] h-[88px] text-white" />
				<div class="hero-text mt-[23.27px]">
					<div class="pl-4">WE CREATE</div>
					<div class="pl-4">AMAZING</div>
					<div class="teal-underline red-dot relative pl-4 w-min md:w-max">DIGITAL EXPERIENCES</div>
				</div>
			</div>

		</div>

		<!-- Bottom salad -->
		<div class="absolute bottom-0 flex flex-col items-center w-full wiggle-container">
			<img src="@/assets/salad.svg" alt="Salad" class="w-[4.0625rem] h-[4.0625rem] mb-[0.69rem] wiggle-on-hover cursor-pointer" />
			<div class="salad-text mb-[1.92rem]">TASTE US NOW!</div>
			<div class="w-[1px] h-[2.75275rem] bg-white"></div>
		</div>

	</section>
</template>

<script setup lang="ts">
import 'youtube-background';
import { onMounted } from 'vue';
import logo from '@/assets/logo.svg';
import InlineSvg from '../components/InlineSvg.vue';

onMounted(() => {
	// @ts-expect-error
	const videoBackgrounds = new VideoBackgrounds('[data-vbg]');
});
</script>

<style>
.hero-section::after {
	content: '';
	display: block;
	width: 1px;
	height: 5.375rem;
	background-color: #808080;
	margin: auto;
}

/* left */
.left-text {
	color: #FFF;
	font-size: 1rem;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
	letter-spacing: 0.13888rem;
	writing-mode: vertical-lr;
	transform: rotate(180deg);
}

.line {
	width: 0.125rem;
	height: 7.0625rem;
}

/* main */
.hero-text {
	color: #FFF;
	font-size: min(2.375rem, 6vw);
	font-style: normal;
	font-weight: 700;
	line-height: 4.375rem;
	/* 184.211% */
	letter-spacing: 0.57294rem;
}

.teal-underline {
	background-image: linear-gradient(to right, #26C6D0, #26C6D0);
	background-size: 100% 8px;
	background-repeat: no-repeat;
	background-position: 0 70%;
	/* transition: background-size 0.3s ease-in-out; */
}

/* bottom salad */
.salad-text {
	color: #FFF;
	font-feature-settings: 'liga' off, 'clig' off;
	font-size: 0.875rem;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
	letter-spacing: 0.125rem;
}
</style>
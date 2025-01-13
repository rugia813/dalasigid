<template>
	<nav class="h-[6.25rem]" :class="{ 'navbar-scroll': hasScrolled, 'navbar-top': !hasScrolled }">
		<div class="navbar-container">
			<!-- logo -->
			<div class="logo w-[7.5rem] h-[3.33331rem]">
				<InlineSvg :src="logo" class="logo w-[7.5rem] h-[3.33331rem]" />
			</div>

			<!-- right -->
			<div class="flex items-center gap-md md:gap-[2.75rem]">
				<!-- start button -->
				<button class="start-button text-white hover:brightness-110">START YOUR PROJECT</button>
				<!-- menu button -->
				<button class="menu-button" :class="{ 'menu-open': isMenuOpen }" @click="toggleMenu">
					<span></span>
					<span></span>
					<span></span>
				</button>
			</div>
		</div>
	</nav>
</template>


<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import InlineSvg from './InlineSvg.vue';
import logo from '@/assets/logo.svg';

const hasScrolled = ref(false);
const isMenuOpen = ref(false);

const handleScroll = () => {
	hasScrolled.value = window.scrollY > 0;
};

const toggleMenu = () => {
	isMenuOpen.value = !isMenuOpen.value;
};

onMounted(() => {
	window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
	window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
nav {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 1000;
	transition: all 0.3s ease, box-shadow 0.3s ease-in;
}

.navbar-top {
	background-color: transparent;
	box-shadow: none;
	padding: 2.56rem 3.75rem 0;
}

.navbar-scroll {
	background-color: rgba(255, 255, 255, 0.90);
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
	padding: 1.56rem 3.75rem 1.35rem 5rem;
}

@media (max-width: 768px) {
	.navbar-top {
		padding: 0.2rem 0.6rem;
	}
	.navbar-scroll {
		padding: 1.56rem 2.5rem 1.35rem 5rem;
	}
}

.navbar-container {
	display: flex;
	justify-content: space-between;
	align-items: center;
	/* max-width: 90rem; */
	/* margin: 0 auto; */
	/* padding: 10px 20px; */
}

/* logo */
.logo {
	color: white;
	transition: all 0.3s ease-out;
	transform: scale(0.5)
}

.navbar-scroll .logo {
	color: #26C6D0;
	transform: scale(1)
}

.navbar-top .logo {
	opacity: 0;
}

/* Menu Icon */
.menu-button {
	background: none;
	border: none;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: end;
	width: 1.875rem;
	height: 1.375rem;
	padding: 0;
}

.menu-button span {
	display: block;
	height: 3px;
	width: 100%;
	background-color: #585880;
	border-radius: 2px;
	transition: all 0.3s ease;
}

.menu-button span:nth-child(3) {
	width: 1.6rem;
}

.menu-button.menu-open span {
	background-color: white;
}

.menu-button.menu-open span:nth-child(1) {
	transform: translateY(10px) rotate(45deg);
}

.menu-button.menu-open span:nth-child(2) {
	opacity: 0;
}

.menu-button.menu-open span:nth-child(3) {
	width: 100%;
	transform: translateY(-9px) rotate(-45deg);
}

.menu-button:focus {
	outline: none;
}

/* Start Button */
.start-button {
	width: 12.5rem;
	height: 2.56413rem;
	border-radius: 1.5rem;
	background: linear-gradient(90deg, #4EE5EA 3.94%, #26D0A8 94.73%);
	transition: filter 0.3s ease;
}
</style>

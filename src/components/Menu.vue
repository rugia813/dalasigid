<template>
	<!-- Fullscreen Menu -->
	<div class="fullscreen-menu" ref="menuContainer" :class="{ active: show }" :style="menuMaskStyle">
		<div class="menu-content">
			<div class="menu-col">
				<div class="menu-item about">
					<img src="@/assets/menu/icons/Group 21.png" />
					<div class="text-wrapper">
						<p>Empowering brands</p>
						<h2 class="red-dot">ABOUT US</h2>
					</div>
				</div>
				<div class="menu-item works">
					<img src="@/assets/menu/icons/tomato.svg" />
					<div class="text-wrapper">
						<p>Case studies</p>
						<h2 class="red-dot">WORKS</h2>
					</div>
				</div>
			</div>
			<div class="menu-col">
				<div class="menu-item careers">
					<img src="@/assets/menu/icons/Group 43.png" />
					<div class="text-wrapper">
						<p>Be cool with us</p>
						<h2 class="red-dot">CAREERS</h2>
					</div>
				</div>
				<div class="menu-item insights">
					<img src="@/assets/menu/icons/Group 28.png" />
					<div class="text-wrapper">
						<p>Our strategies</p>
						<h2 class="red-dot">INSIGHTS</h2>
					</div>
				</div>
			</div>
			<div class="menu-col">
				<div class="menu-item services">
					<img src="@/assets/menu/icons/Group 25.png" />
					<div class="text-wrapper">
						<p>Areas of expertise</p>
						<h2 class="red-dot">SERVICES</h2>
					</div>
				</div>
				<div class="menu-item contact">
					<div class="text-wrapper">
						<p class="text-black">Start your journey with us</p>
						<h2 class="red-dot text-[#26D0A8]">CONTACT</h2>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, computed, watch, type Ref, onMounted, onUnmounted } from 'vue';

const props = defineProps<{
	menuBtn: HTMLElement
}>()

const show = defineModel<boolean>('show', { default: false });

const circleStyle = ref({
	top: "0px",
	left: "100vw",
});

const menuMaskStyle = computed(() => {
	const size = show.value ? "300vw" : "0px";
	return {
		clipPath: `circle(${size} at ${circleStyle.value.left} ${circleStyle.value.top})`,
		WebkitClipPath: `circle(${size} at ${circleStyle.value.left} ${circleStyle.value.top})`,
		transition: "clip-path 0.5s ease-in-out, -webkit-clip-path 0.5s ease-in-out",
	};
});

const toggleMenu = () => {
	const menuBtn = document.getElementsByClassName('menu-button')[0]
	if (menuBtn) {
		const rect = menuBtn.getBoundingClientRect();
		circleStyle.value = {
			top: `${rect.top + rect.height / 2}px`,
			left: `${rect.left + rect.width / 2}px`,
		};
	}
};
watch(show, toggleMenu)
</script>


<style scoped>
.menu-button {
	font-size: 1.5rem;
	background: none;
	border: none;
	color: #fff;
	cursor: pointer;
}

/* Fullscreen Menu Styling */
.fullscreen-menu {
	position: fixed;
	top: 0;
	left: 0;

	width: 100vw;
	height: 100vh;

	opacity: 0.9;
	background: linear-gradient(180deg, #585880 3.61%, #26C6D0 95.7%);
	z-index: 100;
	color: #fff;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	/* transform: translateY(-100%); */
	transition: transform 0.3s ease-in-out;
}

.fullscreen-menu.active {
	/* transform: translateY(0); */
}

.close-button {
	position: absolute;
	top: 1.5rem;
	right: 1.5rem;
	font-size: 2rem;
	background: none;
	border: none;
	color: #fff;
	cursor: pointer;
}

.menu-content {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	max-width: 80%;
	height: max-content;
}

.menu-col {
	@apply flex flex-col gap-8;
	max-width: 100%;
}

.menu-item {
	@apply flex hover:brightness-90 transition-all duration-300;
	background: rgba(255, 255, 255, 0.1);
	border-radius: 1.875rem;
	padding: 1.5rem;
	cursor: pointer;
	max-width: 100%;
	flex: auto;
	flex-shrink: 1;
}

.menu-item img {
	height: min-content;
}

.menu-item:hover img {
	animation: wiggle 0.5s ease-in-out;
}

.menu-item h2 {
	font-size: 2rem;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
	letter-spacing: 0.22725rem;
}

.menu-item p {
	font-size: 1rem;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	letter-spacing: 0.1125rem;
}

.text-wrapper {
	@apply flex flex-col relative;
}

.about {
	@apply justify-center items-center gap-7;
	width: 23.75rem;
	height: 13.125rem;
	background: url("@/assets/menu/bgs/video-thumbnail.png") #26C6D0 0px 0px / 100% 100% no-repeat;
}

.careers {
	@apply justify-center content-end gap-7 flex-wrap pb-14;
	width: 18.125rem;
	height: 26.875rem;
	background: url("@/assets/menu/bgs/DigiSalad-Promotional-Video-Storyboard-v1-14.png") #E6A94E 0px 0px / 100% 100% no-repeat;
}

.services {
	@apply justify-end items-start content-end gap-4 flex-col pb-14;
	width: 23.75rem;
	height: 20rem;
	background: url("@/assets/menu/bgs/DigiSalad-Promotional-Video-Storyboard-v1-24.png") #585880 0px 0px / 100% 100% no-repeat;
}

.works {
	@apply justify-start items-end gap-4 pb-14;
	--dot-color: #26C6D0;
	width: 23.75rem;
	height: 20rem;
	background: url("@/assets/menu/bgs/ChampionREIT-Showcase.png") #EE6C8A 0px 0px / 100% 100% no-repeat;
}

.insights {
	@apply justify-end items-start content-end gap-4 flex-col pb-14 pl-11;
	width: 18.125rem;
	height: 17.625rem;
	background: url("@/assets/menu/bgs/ChampionREIT-Showcase.png") #26D0A8 0px 0px / 100% 100% no-repeat;
}

.contact {
	@apply justify-start items-center gap-7 pl-14;
	width: 23.75rem;
	height: 13.125rem;
	opacity: 0.95;
	background: #FFF;
}

/* Responsive Design */
@media (max-width: 1200px) {
	.menu-content {
		margin-top: 3rem;
		flex-direction: column;
		flex-wrap: wrap;
		/* justify-content: end; */
		height: 100vh;
		width: 100%;
		padding-bottom: .5rem;
	}

	.menu-col {
		@apply w-full items-center;
		max-height: 27%;
	}

	.menu-item {
		@apply flex flex-row w-full flex-auto justify-center items-center content-center;
		max-height: 50%;
		padding: .5rem;
	}

	.menu-item img {
		transform: scale(.8);
	}
}
</style>
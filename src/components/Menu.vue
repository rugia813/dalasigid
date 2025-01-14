<template>
	<!-- Fullscreen Menu -->
	<div class="fullscreen-menu" ref="menuContainer" :class="{ active: show }" :style="menuMaskStyle">
		<div class="menu-content">
			<div class="menu-item about">
				<img src="@/assets/menu/icons/Group 21.png" />
				<p>Empowering brands</p>
				<h2>ABOUT US</h2>
			</div>
			<div class="menu-item careers">
				<img src="@/assets/menu/icons/Group 25.png"  />
				<p>Be cool with us</p>
				<h2>CAREERS</h2>
			</div>
			<div class="menu-item services">
				<img src="@/assets/menu/icons/Group 28.png"  />
				<p>Areas of expertise</p>
				<h2>SERVICES</h2>
			</div>
			<div class="menu-item works">
				<img src="@/assets/menu/icons/Group 43.png"  />
				<p>Case studies</p>
				<h2>WORKS</h2>
			</div>
			<div class="menu-item insights">
				<img src="@/assets/menu/icons/Group 53.png"  />
				<p>Our strategies</p>
				<h2>INSIGHTS</h2>
			</div>
			<div class="menu-item contact">
				<p>Start your journey with us</p>
				<h2>CONTACT</h2>
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
	const size = show.value ? "3000px" : "0px";
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
/* Navbar styling */
.navbar {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 2rem;
	background: #2b2b2b;
	color: #fff;
}

.logo {
	font-size: 1.5rem;
	font-weight: bold;
}

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

	transform: translateY(-100%);
	transition: transform 0.3s ease-in-out;
}

.fullscreen-menu.active {
	transform: translateY(0);
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
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	max-width: 80%;
}

.menu-item {
	background: rgba(255, 255, 255, 0.1);
	border-radius: 1.875rem;
	padding: 1.5rem;
	width: 200px;
	text-align: center;
	cursor: pointer;
}

.menu-item h2 {
	margin: 0.5rem 0;
	font-size: 1.2rem;
}

.menu-item p {
	font-size: 0.9rem;
}

.about {
	width: 23.75rem;
	height: 13.125rem;
	background: url("@/assets/menu/bgs/video-thumbnail.png") #26C6D0 0px 0px / 100% 100% no-repeat;
}

.careers {
	width: 18.125rem;
	height: 26.875rem;
	background: url("@/assets/menu/bgs/DigiSalad-Promotional-Video-Storyboard-v1-14.png") #E6A94E 0px 0px / 100% 100% no-repeat;
}
.services {
	width: 23.75rem;
	height: 20rem;
	background: url("@/assets/menu/bgs/DigiSalad-Promotional-Video-Storyboard-v1-24.png") #585880 0px 0px / 100% 100% no-repeat;
}
.works {
	width: 23.75rem;
	height: 20rem;
	background: url("@/assets/menu/bgs/ChampionREIT-Showcase.png") #EE6C8A 0px 0px / 100% 100% no-repeat;
}
.insights {
	width: 18.125rem;
	height: 17.625rem;
	background: url("@/assets/menu/bgs/ChampionREIT-Showcase.png") #26D0A8 0px 0px / 100% 100% no-repeat;
}
.contact {
	width: 23.75rem;
	height: 13.125rem;
	opacity: 0.95;
	background: #FFF;
}

/* Responsive Design */
@media (max-width: 768px) {
	.menu-content {
		flex-direction: column;
	}
}
</style>
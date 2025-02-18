<template>
  <div class="relative w-full h-full">
    <div class="absolute top-0 right-0 bg-gray-800 p-4 text-white rounded-lg opacity-90">
      <button @click="toggleModel" class="bg-gray-700 p-2 rounded hover:bg-gray-600">Transform</button>
      <button @click="() => { debug = !debug; init(); }" class="bg-gray-700 p-2 rounded hover:bg-gray-600">Debug</button>
    </div>
    <div id="canvas" ref="container" className="fixed top-0 left-0 -z-10" :style="{
      backgroundImage: 'linear-gradient(170deg,#000 10%,#091833 41%,#18191d 80%)'
    }">
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import Stats from 'stats.js';
import TouchTexture from './TouchTexture.js';
import Control from "./InteractiveControls.js";
import vert from "./shaders/vert.js";
import frag from "./shaders/frag.js";

let stats: Stats;
let camera: THREE.PerspectiveCamera, scene: THREE.Scene, renderer: THREE.WebGLRenderer;
let geometry: THREE.InstancedBufferGeometry, material: THREE.RawShaderMaterial, mesh: THREE.Mesh;
let touch: TouchTexture, hitArea: THREE.Mesh;
let control: any;
let debug = true;
let timeOrigin: number, lastFrameTime = 0;
let active = true;

const vertices: number[] = [];
let modelLoaded = false;
const container = ref<HTMLElement | null>(null);
const props = defineProps<{ scale: number; onload: () => void }>();

onMounted(() => {
  props.onload();
  timeOrigin = performance.now();
  lastFrameTime = 0;
  loadModels().then(() => {
    init();
    animate();
  });
});

onUnmounted(() => {
  removeListeners();
});

watch(() => props.scale, (newScale) => {
  if (camera) {
    camera.position.z = newScale;
    resize();
  }
});

function loadModels() {
  if (modelLoaded) return Promise.resolve();
  modelLoaded = true;
  return new Promise<void>((resolve) => {
    const loader = new GLTFLoader();
    loader.load('/statics/models/monkey.gltf', (gltf) => {
      gltf.scene.traverse((child: any) => {
        if (child.isMesh) {
          const positionAttribute = child.geometry.attributes.position;
          for (let i = 0; i < positionAttribute.count; i++) {
            const vertex = new THREE.Vector3();
            vertex.fromBufferAttribute(positionAttribute, i);
            vertex.applyMatrix4(child.matrixWorld);
            vertices.push(vertex.x, vertex.y, vertex.z);
          }
        }
      });
      resolve();
    });
  });
}

function init() {
  active = true;
  renderer = new THREE.WebGLRenderer({ alpha: true });
  if (!renderer.capabilities.isWebGL2 && !renderer.extensions.has('ANGLE_instanced_arrays')) return;

  camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 50000);
  camera.position.z = props.scale;

  scene = new THREE.Scene();
  const circleGeometry = new THREE.CircleGeometry(.6, 12);
  geometry = new THREE.InstancedBufferGeometry();
		geometry.index = circleGeometry.index;
		geometry.attributes = circleGeometry.attributes;

		const ico = new THREE.IcosahedronGeometry(1.1, 13)

		const sg = new THREE.TorusKnotGeometry(
			1,
			10.8,
			600,
			20,
			5,
			8
		)
		sg.scale(.09, .09, .09)
		const pos = sg.attributes.position
		const icoPos = ico.attributes.position
		const uv = sg.attributes.uv
		// console.log('sg: ', sg);

		const particleCount = vertices.length;
		console.log(particleCount);

		const icoCount = icoPos.count * 3;
		console.log(icoCount);


		const translateArray = new Float32Array(particleCount);
		const icoArray = new Float32Array(particleCount);
		const anglesArray = new Float32Array(particleCount);

		for (let i = 0, i3 = 0, l = particleCount;i < l;i++, i3 += 3) {

			icoArray[i3 + 0] = icoPos.array[(i3 % icoCount) + 0];
			icoArray[i3 + 1] = icoPos.array[(i3 % icoCount) + 1];
			icoArray[i3 + 2] = icoPos.array[(i3 % icoCount) + 2];
		}

		for (let i = 0, i3 = 0, l = particleCount;i < l;i++, i3 += 3) {

			translateArray[i3 + 0] = vertices[i3 + 0];
			translateArray[i3 + 1] = vertices[i3 + 1];
			translateArray[i3 + 2] = vertices[i3 + 2];

			anglesArray[i] = Math.random() * Math.PI;
		}

		const uvArr = new Float32Array(particleCount * 2);

		for (let i = 0, i3 = 0, l = particleCount;i < l;i++, i3 += 2) {

			uvArr[i3 + 0] = uv.array[i3 + 0];
			uvArr[i3 + 1] = uv.array[i3 + 1];

		}

		geometry.setAttribute('translate', new THREE.InstancedBufferAttribute(translateArray, 3));
		geometry.setAttribute('ico', new THREE.InstancedBufferAttribute(icoArray, 3));
		geometry.setAttribute('angle', new THREE.InstancedBufferAttribute(anglesArray, 1));
		geometry.setAttribute('aUv', new THREE.InstancedBufferAttribute(uvArr, 2));

		material = new THREE.RawShaderMaterial({
			uniforms: {
				"map": { value: new THREE.TextureLoader().load('/statics/imgs/circle.png') },
				"time": { value: 0.0 },
				"uTouch": { value: null },
				"toggle": { value: false },
				"timeOffset": { value: 0 },
				"rotation": { value: {x: 0.02, y: 0.02} },
			},
			vertexShader: vert,
			fragmentShader: frag,
			depthTest: true,
			depthWrite: true
		});

		mesh = new THREE.Mesh(geometry, material);
		mesh.scale.set(420, 420, 420);
		mesh.position.z = 300;
		scene.add(mesh);

  renderer.setSize(window.innerWidth, window.innerHeight);
  container.value?.appendChild(renderer.domElement);

  if (debug) {
    stats = new Stats();
    document.body.appendChild(stats.dom);
  }

  window.addEventListener('resize', resize);
  control = new Control(camera);
  control.resize();
  initTouch();
  initHitArea();
  addListeners();
}

function toggleModel() {
  material.uniforms["toggle"].value = !material.uniforms["toggle"].value;
  material.uniforms["timeOffset"].value = performance.now() * 0.0005;
}

function initTouch() {
  touch = new TouchTexture(debug);
  mesh.material.uniforms.uTouch.value = touch.texture;
}

function initHitArea() {
  hitArea = new THREE.Mesh(new THREE.PlaneGeometry(1160, 950, 1, 1), new THREE.MeshBasicMaterial({ visible: debug, wireframe: true }));
  scene.add(hitArea);
}

function addListeners() {
  control.addListener('interactive-move', onInteractiveMove);
  control.objects.push(hitArea);
  control.enable();
}

function removeListeners() {
  control.removeListener('interactive-move', onInteractiveMove);
  control.objects = control.objects.filter(obj => obj !== hitArea);
  control.disable();
  active = false;
}

function onInteractiveMove(e: any) {
  const uv = e.intersectionData.uv;
  touch.addTouch(uv);
  mesh.material.uniforms.rotation.value = {
    x: getRotVal(uv.x, mesh.material.uniforms.rotation.value.x),
    y: getRotVal(uv.y, mesh.material.uniforms.rotation.value.y)
  };
}

function getRotVal(f: number, oldv: number) {
  const nRot = (f - 0.5) * .05;
  return nRot > oldv ? Math.min(nRot, oldv + 0.001) : Math.max(nRot, oldv - 0.001);
}

function resize() {
  control.resize();
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  if (!active) return;
  requestAnimationFrame(animate);
  render();
  stats?.update();
}

function render() {
  material.uniforms["time"].value = (performance.now() - timeOrigin) * 0.0005;
  renderer.render(scene, camera);
}
</script>
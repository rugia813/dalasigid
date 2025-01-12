<template>
  <div v-if="svgContent" v-html="svgContent" class="inline-svg" />
</template>

<script>
import { ref, watch, onMounted } from "vue";

export default {
  name: "InlineSvg",
  props: {
    src: {
      type: String,
      required: false,
      default: ""
    },
    svgString: {
      type: String,
      required: false,
      default: ""
    }
  },
  setup(props) {
    const svgContent = ref("");

    const loadSvgFromSrc = async () => {
      if (!props.src) return;
      try {
        const response = await fetch(props.src);
        if (!response.ok) {
          throw new Error(`Failed to fetch SVG: ${response.statusText}`);
        }
        svgContent.value = await response.text();
      } catch (error) {
        console.error("Error loading SVG:", error);
        svgContent.value = "";
      }
    };

    watch(
      () => props.src,
      () => {
        loadSvgFromSrc();
      },
      { immediate: true }
    );

    watch(
      () => props.svgString,
      (newVal) => {
        svgContent.value = newVal;
      },
      { immediate: true }
    );

    onMounted(() => {
      if (props.src) {
        loadSvgFromSrc();
      }
    });

    return {
      svgContent
    };
  }
};
</script>

<style scoped>
/* .inline-svg {
  display: inline-block;
  width: 100%;
  height: auto;
} */
</style>

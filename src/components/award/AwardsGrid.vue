<template>
  <div class="flex flex-col mt-8 w-full max-md:mt-10 max-md:max-w-full">
    <div class="grid grid-cols-2 gap-5 max-md:grid-cols-1">
      <template v-for="(award, index) in awards" :key="index">
        <img
          loading="lazy"
          :src="award.image"
          :alt="award.title"
          class="object-contain w-full aspect-[2.62]"
        />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Award {
  image: string
  title: string
}

const awards: Award[] = [
  { image: 'https://cdn.builder.io/api/v1/image/assets/0ccfe98b796a46c7b321e819adeef68c/1209ddb0af12b5fb60312a21b1d04af4da801c372dde290ac95a45c8364ce48f?apiKey=0ccfe98b796a46c7b321e819adeef68c&', title: 'Award 1' },
  { image: 'https://cdn.builder.io/api/v1/image/assets/0ccfe98b796a46c7b321e819adeef68c/a66ae40da883efdbbd08a25eabffd79f2f4b0cfc990886d0ada1b4d1396c8514?apiKey=0ccfe98b796a46c7b321e819adeef68c&', title: 'Award 2' },
  { image: 'https://cdn.builder.io/api/v1/image/assets/0ccfe98b796a46c7b321e819adeef68c/1209ddb0af12b5fb60312a21b1d04af4da801c372dde290ac95a45c8364ce48f?apiKey=0ccfe98b796a46c7b321e819adeef68c&', title: 'Award 3' },
  { image: 'https://cdn.builder.io/api/v1/image/assets/0ccfe98b796a46c7b321e819adeef68c/a66ae40da883efdbbd08a25eabffd79f2f4b0cfc990886d0ada1b4d1396c8514?apiKey=0ccfe98b796a46c7b321e819adeef68c&', title: 'Award 4' }
]
</script>
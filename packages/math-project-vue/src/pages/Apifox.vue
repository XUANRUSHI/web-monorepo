<script lang="ts" setup>
import type { Pet, Response } from '@/types/type'
import { ref } from 'vue'

const baseURL = 'http://127.0.0.1:4523/m1/5224799-4891582-default'
// const baseURL=import.meta.env.ViTE_API_URL

const pet = ref<Pet>()

async function getData() {
  const res = await fetch(`${baseURL}/pet/1`)
  const json: Response<Pet> = await res.json()
  pet.value = json.data
}
</script>


<template>
  <div>
    <p class="flex justify-center gap-5">
      {{ baseURL }}
    </p>

    <div class="flex justify-center gap-5">
      <button class="btn" @click="getData">
        获取宠物数据
      </button>
    </div>

    <div w-full class="flex justify-center gap-5">
      <div>{{ pet?.name }}</div>
      <div>{{ pet?.category.name }}</div>
    </div>
    <div class="flex justify-center gap-5">
      <img v-for="(url, index) in pet?.photoUrls" :key="index" :src="url" alt="">
    </div>
  </div>
</template>


<style>

</style>

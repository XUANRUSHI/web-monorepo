<script setup lang="ts">
import { Person } from '@xuanrushi/tools'
import dayjs from 'dayjs'
import { onMounted } from 'vue'
import ZhiHuHot from './components/ZhiHuHot.vue'
import { useDark } from './composables/useDark'
import 'uno.css'

const { enableDarkMode, disableDarkMode, applySavedTheme } = useDark()

onMounted(() => {
  applySavedTheme()
})

const p = new Person('史轩如', 'React')
</script>

<template>
  <div class="p-2 dark:bg-red">
    <div
      class="m-auto size-100 bg-pink hover:(bg-cyan text-4xl)"
      transition="-1000"
      flex
      content-center
      items-center
      justify-center
    >
      <button btn>
        OnClick
      </button>
      <div class="i-carbon-logo-github" />
    </div>
    <div class="dark:bg-red">
      <div class="flex justify-center gap-5">
        <button @click="disableDarkMode">
          Light
        </button>
        <button @click="enableDarkMode">
          Dark
        </button>
      </div>
    </div>
    <div>{{ dayjs().format("YYYY年MM月DD日 HH:mm:ss") }}</div>
    <div>{{ p.name }} : {{ p.slogan }}</div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo">
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo">
    </a>
    <TypeDemo />
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <ZhiHuHot />
</template>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

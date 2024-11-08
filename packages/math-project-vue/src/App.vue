<script setup lang="ts">
import { Person } from '@xuanrushi/tools'
import dayjs from 'dayjs'
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { showMsg } from './components/MessageBox'
// import ZhiHuHot from './components/ZhiHuHot.vue'
import { useDark } from './composables/useDark'
import 'uno.css'

const { enableDarkMode, disableDarkMode, applySavedTheme } = useDark()

onMounted(() => {
  applySavedTheme()
})

function openAleartart() {
  showMsg({
    title: '标题',
    content: '1234567',
    closeable: true,
    showCancel: true,
    onCancel: () => {
      // console.log('Cancel >>')
    },
    onConfirm: () => {
      // console.log('Confirm >>')
    },
  })
}


const p = new Person('史轩如', 'React')
</script>

<template>
  <!-- 大方块 -->
  <div class="p-2 dark:bg-red">
    <div
      class="m-auto size-100 bg-pink text-4xl hover:bg-cyan"
      style="display: flex; align-items: center; justify-content: center;"
    >
      <button class="btn">
        OnClick
      </button>
      <button class="btn" @click="openAleartart">
        打开弹窗
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


      <!-- 1111111111 -->
      <main
        class="m-2 h-100vh overflow-y-scroll rounded-xl bg-pink-200 dark:bg-purple-300"
      >
        <p>
          <strong>Current route path:</strong> {{ $route.fullPath }}
        </p>
        <header flex justify-center gap-4 text-xl>
          <RouterLink to="/Zhihuhot">
            知乎热榜
          </RouterLink>

          <RouterLink to="/mock">
            以赝丁真
          </RouterLink>
          <RouterLink to="/apifox">
            Apifox
          </RouterLink>
          <RouterLink to="/i18n">
            i18n
          </RouterLink>
          <RouterLink to="/UnoCSS">
            UnoCSS
          </RouterLink>
        </header>
        <router-view />
      </main>


      <!-- 22222222 -->
      <div class="mt-4 text-center">
        {{ dayjs().format("YYYY年MM月DD日 HH:mm:ss") }}
      </div>
      <div class="text-center">
        {{ p.name }} : {{ p.slogan }}
      </div>
      <div class="mt-4 flex justify-center gap-4">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" class="logo" alt="Vite logo">
        </a>
        <a href="https://vuejs.org/" target="_blank">
          <img src="./assets/vue.svg" class="logo vue" alt="Vue logo">
        </a>
      </div>
    </div>
    <section
      class="grid grid-cols-3 m-auto mb-4 mt-4 w-800px items-center gap-2 rounded-md bg-pink-2"
    >
      <div class="h-10 place-content-center bg-pink-3">
        1
      </div>
      <div class="h-10 place-content-center bg-pink-4">
        2
      </div>
      <div class="h-10 place-content-center bg-pink-3">
        3
      </div>
      <div class="h-10 place-content-center bg-pink-4">
        4
      </div>
      <div class="h-10 place-content-center bg-pink-3">
        5
      </div>
      <div class="h-10 place-content-center bg-pink-4">
        6
      </div>
    </section>
    <!-- <ZhiHuHot /> -->
  </div>
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

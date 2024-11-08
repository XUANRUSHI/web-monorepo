import ZhiHuHot from '@/components/test/ZhiHuHot.vue'
import Apifox from '@/pages/Apifox.vue'
// import ColorTheme from '@/pages/ColorTheme.vue'
import ColorTheme from '@/pages/ColorTheme.vue'
import i18n from '@/pages/i18n.vue'
import MockView from '@/pages/MockView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { name: 'Zhihuhot', path: '/Zhihuhot', component: ZhiHuHot },
  { name: 'mock', path: '/mock', component: MockView },
  { name: 'Apifox', path: '/apifox', component: Apifox },
  { name: 'i18n', path: '/i18n', component: i18n },
  { name: 'UnoCSS', path: '/UnoCSS', component: ColorTheme },

]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router

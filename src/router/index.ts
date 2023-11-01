import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import TopPage from '@/pages/TopPage.vue'

const routerSettings: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'TopPage',
    component: TopPage,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routerSettings,
})

export default router

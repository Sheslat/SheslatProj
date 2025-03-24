import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import BestiaTable from '@/modules/bestia/view/BestiaTable.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView,
    },
    {
      path: '/bestia',
      name: 'bestiaTable',
      component: BestiaTable,
    },
  ],
})

export default router

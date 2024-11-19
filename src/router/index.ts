import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import TableView from '../views/TableView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView,
      children:[{
        path: '/:module',
        name: 'table',
        component: TableView
      }]
    },
    
  ]
})

export default router

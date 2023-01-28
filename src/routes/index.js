import { createRouter, createWebHashHistory } from 'vue-router'

// 引入routes中的插件
import routes from './routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

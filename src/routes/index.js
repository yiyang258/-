import { createRouter, createWebHashHistory } from 'vue-router'

// 引入routes中的插件
import routes from './routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
/**
 * 全局路由守卫,用于判断登录权限
 */
router.beforeEach((to,from,next)=>{
  if (to.path == '/' && !localStorage.getItem('name')) {
    next('/login')
  }else{
    next()
  }
  // console.log('路由守卫参数1 to',to);
  // console.log('路由守卫参数2 from',from);
  // console.log('路由守卫参数3 next',next);
})

export default router

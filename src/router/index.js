import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routers = [
  {
    path: '/',
    hidden: true,
    component: resolve => require(['@/components/HelloWorld'], resolve)
  },
  {
    path: '/login',
    hidden: true,
    component: resolve => require(['@/components/registry/login'], resolve)
  },
  {
    path: '/reg',
    hidden: true,
    component: resolve => require(['@/components/registry/reg'], resolve)
  },
  {
    path: '/hello',
    hidden: false,
    meta: {
      /** 添加该字段，表示进入这个路由是需要登录的 **/
      requireAuth: true
    },
    component: resolve => require(['@/components/hello'], resolve)
  },
  {
    path: '/index',
    hidden: false,
    meta: {
      /** 添加该字段，表示进入这个路由是需要登录的 **/
      requireAuth: true
    },
    component: resolve => require(['@/components/index'], resolve)
  }
]

export default new Router({
  base: '/',
  mode: 'history',
  routes: routers
})

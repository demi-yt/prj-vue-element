import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'login',component: resolve=>require(['@/components/login.vue'],resolve)},
    {path: '/homePage',name: 'homePage',component: resolve=>require(['@/components/home/index.vue'],resolve),    
    children: [      
      {path: '/homePage',name: '首页',component: resolve=>require(['@/components/home/homePage/homePage.vue'],resolve)},
      {path: '/index',name: '用户列表',component: resolve=>require(['@/components/home/user/user.vue'],resolve)},
      {path: '/role',name: '角色管理',component: resolve=>require(['@/components/home/role/role.vue'],resolve)},
    ]
  }
  ] 
})

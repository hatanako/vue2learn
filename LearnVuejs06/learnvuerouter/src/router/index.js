import Vue from "vue";
import VueRouter from "vue-router";

import Home from '../components/Home.vue'
import About from '../components/About.vue'

// 1.通过Vue.use(插件)，安装插件
Vue.use(VueRouter)

// 2.创建VueRouter对象
const routes=[
    {
        path:'',
        // redirect 重定向
        redirect:'/home'
    },
    {
        path:'/home',
        component: Home
    },
    {
        path:'/about',
        component: About
    },
]
const router = new VueRouter({
    // 配置路由和组件之间的应用关系
    routes,
    mode: 'history',
    linkActiveClass: 'active'
})

// 3.将router对象传入到vue实例
export default router
import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/home/index.vue')



Vue.use(Router)

export default new Router({
    // mode: 'history',
    routes: [
        {
            path: '',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home,
            meta: {
                title: '评审专家'
            }
        },
    ],
})
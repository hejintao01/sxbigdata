import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/home/index.vue')
const Agency = () => import('@/agency/index.vue')
const Purchasing = () => import('@/purchasing/index.vue')



Vue.use(Router)

export default new Router({
    // mode: 'history',
    routes: [
        {
            path: '',
            redirect: '/home'
        },
        // {
        //     path: '',
        //     redirect: '/agency'
        // },
        {
            path: '/home',
            component: Home,
            meta: {
                title: '评审专家'
            }
        },
        // {
        //     path: '/agency',
        //     component: Agency,
        //     meta: {
        //         title: '代理机构'
        //     }
        // },
        {
            path: '/purchasing',
            component: Purchasing,
            meta: {
                title: '采购经理'
            }
        }

        
    ],
})
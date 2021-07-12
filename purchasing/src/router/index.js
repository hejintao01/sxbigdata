import Vue from 'vue'
import Router from 'vue-router'

const Purchasing = () => import('@/purchasing/index.vue')



Vue.use(Router)

export default new Router({
    // mode: 'history',
    routes: [
        {
            path: '',
            redirect: '/purchasing'
        },
        {
            path: '/purchasing',
            component: Purchasing,
            meta: {
                title: '采购经理'
            }
        }
    ],
})
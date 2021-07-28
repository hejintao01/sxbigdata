import Vue from 'vue'
import Router from 'vue-router'
const Supplier = () => import('@/supplier/index.vue')


Vue.use(Router)

export default new Router({
    // mode: 'history',
    routes: [
        {
            path: '',
            redirect: '/supplier'
        },
        {
            path: '/supplier',
            component: Supplier,
            meta: {
                title: '供应商'
            }
        },
    ],
})
import Vue from 'vue'
import Router from 'vue-router'

const Agency = () => import('@/agency/index.vue')
Vue.use(Router)
export default new Router({
    // mode: 'history',
    routes: [
         {
            path: '',
            redirect: '/agency'
        },
         {
            path: '/agency',
            component: Agency,
            meta: {
                title: '代理机构'
            }
        },
    ],
})
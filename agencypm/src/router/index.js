import Vue from 'vue'
import Router from 'vue-router'
const Agencypm = () => import('@/agencypm/index.vue')
Vue.use(Router)
export default new Router({
    // mode: 'history',
    routes: [
        {
            path: '',
            redirect: '/agencypm'
        },
        {
            path: '/agencypm',
            component: Agencypm,
            meta: {
                title: '代理机构项目经理'
            }
        }
    ],
})
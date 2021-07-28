import Vue from 'vue'
import App from './App.vue'
import router from './router'
import echarts from 'echarts'
import './util/rem'
import moment from 'moment/moment'

Vue.config.productionTip = false
// 挂载echarts到vue的原型对象上，this.$echarts使用
Vue.prototype.$echarts = echarts
// 请求公共配置路劲
// axios.defaults.banpmseURL = ''
// 将axios挂载到vue原型对象,this.$http使用
// Vue.prototype.$http = axios
 
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})


Vue.filter('moment', function (value, formatString) {
  formatString = formatString || 'YYYY-MM-DD';
  // return moment(value).format(formatString); // value可以是普通日期 20170723
  return moment.unix(value).format(formatString); // 这是时间戳转时间
});

new Vue({
  el:'#app',
  router,
  render: h => h(App),
})

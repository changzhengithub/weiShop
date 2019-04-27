// import Vue from 'vue'
import Router from 'vue-router'

const IndexComponent = () => import(/* webpackChunkName: 'index' */ '@/components/index/index.vue')
const OrderComponent = () => import(/* webpackChunkName: 'index' */ '@/components/order/order.vue')

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexComponent
    },
    {
      path: '/order',
      name: 'order',
      component: OrderComponent
    }
  ]
})


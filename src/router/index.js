import Vue from 'vue'
import Router from 'vue-router'
// import 
import order from '@/components/mycenlist/order'  // 我的订单
import makeGroup from '@/components/mycenlist/makeGroup' //我的拼团
import myCollection from '@/components/mycenlist/myCollection' //我的收藏
import myPonits from '@/components/mycenlist/myPonits' //我的积分
import coupon from '@/components/mycenlist/coupon';  //我的优惠券
Vue.use(Router)
console.log(order)

export default new Router({
  routes: [
    {
      path: '/order',
      name: 'order',
      component:order
    },
    {
      path: '/makeGroup',
      name: 'makeGroup',
      component: makeGroup
    },
    {
      path: '/myCollection',
      name: 'myCollection',
      component: myCollection
    },
    {
      path: '/myPonits',
      name: 'myPonits',
      component: myPonits
    },
    {
      path: '/coupon',
      name: 'coupon',
      component: coupon
    },
  ]
})

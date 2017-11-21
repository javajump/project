import Vue from 'vue'
import VueRouter from 'vue-router'
import DetailPage from '../components/detail-page.vue'
import goods from '../components/goods.vue'
import ratings from '../components/ratings.vue'
import seller from '../components/seller.vue'
import nodata from '../components/nodata.vue'
import loginpage from '../components/loginpage.vue'
import dingdan from '../components/dingdan.vue'
import mydata from '../components/mydata.vue'
import address from '../components/address.vue'
import homepage from '../components/homepage.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: homepage
    },
    {
      path: '/detail',
      name: 'detail',
      component: DetailPage,
      children: [
        {
          path: '/',
          name: 'goods',
          component: goods
        },
      {
        path: '/detail/goods',
        name: 'goods',
        component: goods
      },
      {
        path: '/detail/ratings',
        name: 'ratings',
        component: ratings
      },
      {
        path: '/detail/seller',
        name: 'seller',
        component: seller
      }]
    },
    {
      path: '/nodata',
      name: 'nodata',
      component: nodata
    },
    {
      path: '/loginpage',
      name: 'loginpage',
      component: loginpage
    },
    {
      path: '/dingdan',
      name: 'dingdan',
      component: dingdan
    },
    {
      path: '/mydata',
      name: 'mydata',
      component: mydata
    },
    {
      path: '/address',
      name: 'address',
      component: address
    },
    {
      path: '/homepage',
      name: 'homepage',
      component: homepage
    }
  ]
})

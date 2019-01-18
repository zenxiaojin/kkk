import Vue from 'vue'
import Router from 'vue-router'
import Sign_in from '@/views/Sign_in'
import home from '@/views/home'
import Shop from '@/views/Shop'
import register from '@/views/register'
import LogisticsTools from '@/views/LogisticsTools'
import DeliverGoods from '@/views/DeliverGoods'
import AfterSale from '@/views/AfterSale'
import EditGoods from '@/views/EditGoods'
import NewGoods from '@/views/NewGoods'
import babyList from '@/views/babyList'
import edit_commodity from '@/views/edit_commodity'
import Orderlist from '@/views/Orderlist'
import Coupons from '@/views/Coupons'
import LoanAccount from '@/views/LoanAccount'
import BankCardManagement from '@/views/BankCardManagement'
import CashWithdrawal from '@/views/CashWithdrawal'
import Alipay from '@/views/Alipay'
Vue.use(Router)
export default new Router({
  routes: [
  	{
      path: '',
      name: 'home',
      component: home,
      children: [
		      {
		        path: '/Shop',
		        component: () => import('@/views/Shop'),
		        name: 'Shop',
		      },
          {
            path: '/LogisticsTools',
            component: () => import('@/views/LogisticsTools'),
            name: 'LogisticsTools',
          },
          {
            path: '/DeliverGoods',
            component: () => import('@/views/DeliverGoods'),
            name: 'DeliverGoods',
          },
          {
            path: '/AfterSale',
            component: () => import('@/views/AfterSale'),
            name: 'AfterSale',
          },
          {
            path: '/EditGoods',
            component: () => import('@/views/EditGoods'),
            name: 'EditGoods',
          },
           {
            path: '/NewGoods',
            component: () => import('@/views/NewGoods'),
            name: 'NewGoods',
          },
          {
            path: '/babyList',
            component: () => import('@/views/babyList'),
            name: 'babyList',
          },
          {
            path: '/edit_commodity',
            component: () => import('@/views/edit_commodity'),
            name: 'edit_commodity',
          },
          {
            path: '/Orderlist',
            component: () => import('@/views/Orderlist'),
            name: 'Orderlist',
          },
          {
            path: '/Coupons',
            component: () => import('@/views/Coupons'),
            name: 'Coupons',
          },
          {
            path: '/LoanAccount',
            component: () => import('@/views/LoanAccount'),
            name: 'LoanAccount',
          },
          {
            path: '/BankCardManagement',
            component: () => import('@/views/BankCardManagement'),
            name: 'BankCardManagement',
          },
          {
            path: '/CashWithdrawal',
            component: () => import('@/views/CashWithdrawal'),
            name: 'CashWithdrawal',
          },
          {
            path: '/Alipay',
            component: () => import('@/views/Alipay'),
            name: 'Alipay',
          },
    	]
    },
    {
      path: '/Sign_in',
      name: 'Sign_in',
      component: Sign_in
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    
  ]
})

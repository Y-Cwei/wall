import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const HomeIndex = () => import('../views/home/Index.vue')
const CategoryIndex = () => import('../views/category/Index.vue')
const ShowCartIndex = () => import('../views/shopcart/Index.vue')
const ProfileIndex = () => import('../views/profile/Index.vue')

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: HomeIndex
  },
  {
    path: '/category',
    component: CategoryIndex
  },
  {
    path: '/shopcart',
    component: ShowCartIndex
  },
  {
    path: '/profile',
    component: ProfileIndex
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

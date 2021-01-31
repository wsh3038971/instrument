import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/pdfTest',
    name: 'pdfTest',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/pdf/pdfTest.vue')
  },
  {
    path: '/imgTest',
    name: 'imgTest',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/img/imgTest.vue')
  },
  {
    path: '/imgPreview',
    name: 'imgPreview',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/img/imgPreview.vue')
  },
  {
    path: '/bdMap',
    name: 'bdMap',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/map/bdMap.vue')
  },
  {
    path: '/drag',
    name: 'drag',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/drag/drag.vue')
  },
  {
    path: '/drag1',
    name: 'drag1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/drag/drag1.vue')
  },
  {
    path: '/transition',
    name: 'transition',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/transition/transition.vue')
  },
  {
    path: '/goFrom',
    name: 'goFrom',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/goFrom/goFrom.vue')
  },
  {
    path: '/screenshot',
    name: 'screenshot',
    component: () => import('../views/screenshot/screenshot.vue')
  },
  {
    path: '/video',
    name: 'video',
    component: () => import('../views/video/video.vue')
  },
  {
    path: '/textRoll',
    name: 'textRoll',
    component: () => import('../views/textRoll/textRoll.vue')
  },
  {
    path: '/swipe',
    name: 'swipe',
    component: () => import('../views/swipe/swipe.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

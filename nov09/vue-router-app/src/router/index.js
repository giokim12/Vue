import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HelloView from '@/views/HelloView'
import LoginView from '@/views/LoginView'
import { component } from 'vue/types/umd'

Vue.use(VueRouter)

const isLoggedIn = true

const routes = [
  {
    // 장고의 URLS.PY랑 비슷한 역할
    // 홈 뷰 컴포넌트로 교체
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    // 어바웃 뷰 컴포넌트로 교체
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: 'hello/:userName',
    name: 'hello',
    component: HelloView,
    // 라우터에 연결되어있으니까 HelloView는 어디에 만드냐면
    // views 폴더 안에 만들기 

    data: function() {
      return {
        userName : this.$route.params.userName
      }
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    beforeEnter(to, from, next) {
      if (isLoggedIn === true) {
        console.log('이미 로그인 함')
        next({ name: 'home '})
      } else {
        next()
      }
    }
  },
  {
    path: '/404',
    name: 'NotFound404',
    component: NotFound404
  },
  {
    path: '/dog/:breed',
    name: 'dog',
    component: DogView
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


// -------------------------------------------
// 전역가드!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// router.beforeEach((to, from, next) => {
//   console.log('to', to)
//   console.log('from', from)
//   console.log('next', next)
//   next()
// })

// router.beforeEach((to, from, next) => {
//   // 로그인 여부
//   const isLoggedIn = true

//   // 로그인이 필요한 페이지

//   // 로그인이 되어야지만 hello 페이지 볼 수 있음
//   const authPages = ['hello']
//   // 로그인 필요한 페이지들을 배열에 넣을 수 있음
//   // const authPages = ['hello', 'home', 'about']


//   // 앞으로 이동할 페이지(to)가
//   // 로그인이 필요한 사이트인지 확인
//   const isAuthRequired = authPages.includes(to.name)

//   if (isAuthRequired && !isLoggedIn ) {
//     console.log('로그인을 이동')
//     next({name: 'login'})
//   } else {
//     console.log('to로 이동')
//     next()
//   }
// })

// -----------------------------------------------






export default router

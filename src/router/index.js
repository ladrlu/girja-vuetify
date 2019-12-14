import Vue from 'vue'
import VueRouter from 'vue-router'
import CreateWorkout from '../views/CreateWorkout.vue';
import RunWorkout from '../views/RunWorkout.vue';
import HomePage from '../views/HomePage.vue'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    name: 'homePage',
    component: HomePage
  },
  {
    path: '/createWorkout',
    name: 'createworkout',
    component: CreateWorkout
  },
  {
    path: '/runWorkout',
    name: 'runWorkout',
    component: RunWorkout
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

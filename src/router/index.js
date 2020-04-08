import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'helloworld',
      component: (resolve) => require(['../components/HelloWorld'], resolve),
    },
    {
      path: '/todo',
      name: 'todo',
      component: (resolve) => require(['../components/todo'], resolve),
    },
  ],
})

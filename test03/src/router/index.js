import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index.vue'
import button from '../pages/button.vue'
import form from '../pages/form.vue'
import list from '../pages/list.vue'
import nav from '../pages/nav.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/button',
      name: 'button',
      component: button
    },
    {
      path: '/form',
      name: 'form',
      component: form
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/nav',
      name: 'nav',
      component: nav
    }
  ]
})

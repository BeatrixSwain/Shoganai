import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import ListHistorias from '@/components/historias/ListHistorias'
import EditHistoria from '@/components/historias/EditHistoria'
import NewHistoria from '@/components/historias/NewHistoria'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/historias',
      name: 'ListHistorias',
      component: ListHistorias
    },
    {
      path: '/historias/:historiaId/edit',
      name: 'EditHistoria',
      component: EditHistoria
    },
    {
      path: '/create',
      name: 'NewHistoria',
      component: NewHistoria
    }
  ],
  mode: 'history'
})

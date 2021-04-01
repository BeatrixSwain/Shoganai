import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ListHistorias from '@/components/historias/ListHistorias'
import EditHistoria from '@/components/historias/editHistoria'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
    }
  ],
  mode: 'history'
})

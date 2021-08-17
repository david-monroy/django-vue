import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import ListParticipante from '@/components/Participante/ListParticipante'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/participantes',
      name: 'ListParticipante',
      component: ListParticipante
    }
  ],
  mode: 'history'
})

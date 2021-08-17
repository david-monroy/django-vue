import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import ListParticipante from '@/components/Participante/ListParticipante'
import EditParticipante from '@/components/Participante/EditParticipante'

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
    },
    {
      path: `/participantes/:id/edit`,
      name: 'EditParticipante',
      component: EditParticipante
    }
  ],
  mode: 'history'
})

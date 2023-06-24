import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import QuemSomos from '../views/QuemSomos.vue'
import FaleConosco from '../views/FaleConosco.vue'
import Login from '../views/Login.vue'
import Locais from '../views/Locais.vue'
import Dicas from '../views/Dicas.vue'
import Vidro from '../views/Vidro.vue'
import Plastico from '../views/Plastico.vue'
import Papel from '../views/Papel.vue'
import Metal from '../views/Metal.vue'
import Eletronico from '../views/Eletronico.vue'
import PapelLocais from '../views/PapelLocais.vue'
import Cadastro from '../views/Cadastro.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/quemSomos',
    name: 'quem somos',
    component: QuemSomos
  },
  {
    path: '/faleConosco',
    name: 'fale  conosco',
    component: FaleConosco
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/locais',
    name: 'Locais',
    component: Locais
  },
  {
    path: '/dicas',
    name: 'Dicas',
    component: Dicas
  },
  {
    path: '/vidro',
    name: 'Vidro',
    component: Vidro
  },
  {
    path: '/plastico',
    name: 'Plastico',
    component: Plastico
  },
  {
    path: '/papel',
    name: 'Papel',
    component: Papel
  },
  {
    path: '/metal',
    name: 'Metal',
    component: Metal
  },
  {
    path: '/eletronico',
    name: 'Eletronico',
    component: Eletronico
  },
  {
    path: '/papel-locais',
    name: 'Papel Locais',
    component: PapelLocais
  },
  {
    path: '/cadastre-se',
    name: 'Cadastro',
    component: Cadastro
  },
]

const router = new VueRouter({
  routes
})

export default router
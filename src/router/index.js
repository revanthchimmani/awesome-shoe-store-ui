import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsPage from '../views/ProductsPage.vue'
import ProductDetails from '../views/ProductDetails.vue'
import CartPage from '../views/CartPage.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/products',
    name: 'ProductsPage',
    component: ProductsPage
  }, 
  {
    path: '/cart',
    name: 'CartPage',
    component: CartPage
  },  
  {
    path: '/products/:id',
    name: 'ProductDetails',
    component: ProductDetails
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

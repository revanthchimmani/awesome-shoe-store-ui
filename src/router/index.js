import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsPage from '../views/ProductsPage.vue'
import ProductDetails from '../views/ProductDetails.vue'
import CartPage from '../views/CartPage.vue'
import NotFoundPage from '../views/NotFoundPage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
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
  {
    path: '/aa*',
    component: NotFoundPage,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

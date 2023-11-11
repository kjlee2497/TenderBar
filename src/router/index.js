import Vue from 'vue'
import VueRouter from 'vue-router'
import RecipeCard from '../components/RecipeCard.vue'
import HomePage from '../components/HomePage.vue'
import RecipePreview from '../components/RecipePreview.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: `/recipe/:recipeId`,
    name: 'recipe',
    component: RecipeCard
  },
  {
    path: '/home',
    name: 'home-page',
    component: HomePage
  },
  {
    path: '/previews/:ingredient',
    name: 'RecipePreview',
    component: RecipePreview
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

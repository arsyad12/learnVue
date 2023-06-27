import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

//instalasi bootstrap
import "bootstrap"
import "bootstrap/dist/css/bootstrap.css"

//instalasi animate.css
import "animate.css"
import "animate.css/animate.css"

//import icon shoping dari font awesome
import { library } from '@fortawesome/fontawesome-svg-core';

import { faShoppingCart,faDollarSign } from "@fortawesome/free-solid-svg-icons";

import product from "./components/product";
import checkout from "./components/checkout";

library.add(faShoppingCart,faDollarSign);
Vue.use(VueRouter)


const router = new VueRouter({
 routes: [
{
  path : "*",
  component : product
},
{
  path : "/checkout",
  component : checkout
}
 ]  
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

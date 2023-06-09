import Vue from 'vue'
import App from './App.vue'

//instalasi bootstrap
import "bootstrap"
import "bootstrap/dist/css/bootstrap.css"

//instalasi animate.css
import "animate.css"
import "animate.css/animate.css"

//import icon shoping dari font awesome
import { library } from '@fortawesome/fontawesome-svg-core';

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

library.add(faShoppingCart);





Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

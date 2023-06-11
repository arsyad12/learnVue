<template>
  <div id="app" class="container mt-5">
  <h1>ID Shop</h1>
  <!-- <p class="animate__animated animate__fadeInRight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste officiis beatae temporibus accusamus aliquid mollitia alias commodi fugit blanditiis nostrum, eum consequatur quidem voluptas esse quaerat ex facilis dolore voluptatibus.</p>
  <font-awesome-icon icon="shopping-cart"></font-awesome-icon>
  <price :value="4.5"></price> -->
  <product-list :maximum="maximum" :products="products" @add="addItem"></product-list>
  </div>
</template>

<script>

// import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

// import price from "./components/price.vue";

import ProductList from "./components/ProductList.vue"

export default {
  name: 'App',

  data : function () {
    return { 
      maximum : 20,
      products : [],
      cart :[]
    }
  },


  components: {
    // FontAwesomeIcon,
    // price
    ProductList
  },

  mounted: function() {
    fetch('https://hplussport.com/api/products/order/price')
        .then(response => response.json())
        .then(data => {
            this.products = data;
        });
  },


  methods: {

addItem: function(product) {
        let productIndex;
        let productExist = this.cart.filter(function(item, index) {
            if (item.product.id == Number(product.id)) {
                productIndex = index;
                return true;
            } else {
                return false;
            }
        });

        if (productExist.length) {
            this.cart[productIndex].qty++
        } else {
            this.cart.push({product: product, qty: 1});
        }
    }

  }

}

</script>


<template>
  <div id="app" class="container mt-5">
  <h1>ID Shop</h1>
  <navbar :cart="cart" :cartQty="cartQty" :cartTotal="cartTotal" @toggle="toggleSliderStatus"></navbar>
  <p class="animate__animated animate__fadeInRight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste officiis beatae temporibus accusamus aliquid mollitia alias commodi fugit blanditiis nostrum, eum consequatur quidem voluptas esse quaerat ex facilis dolore voluptatibus.</p>
  <!-- <font-awesome-icon icon="shopping-cart"></font-awesome-icon> -->
  <!-- <price :value="4.5"></price> -->
  <price-slider :sliderStatus="sliderStatus" :maximum.sync="maximum"></price-slider>
  <product-list :maximum="maximum" :products="products" @add="addItem"></product-list>

  </div>
</template>

<script>


// import price from "./components/price.vue";

import navbar from "./components/navbar.vue";

import ProductList from "./components/ProductList.vue"

import PriceSlider from "./components/PriceSlider.vue";

export default {
  name: 'App',

  data : function () {
    return { 
      maximum : 20,
      products : [],
      cart :[],
      sliderStatus : false
    }
  },


  components: {
    // price
    navbar,
    ProductList,
    PriceSlider
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
    },

    toggleSliderStatus: function() {
      this.style.sliderStatus = !this.style.sliderStatus;
    }

  },

  computed: {
    cartTotal: function () {
        let sum = 0;
        for (let key in this.cart) {
            sum = sum + (this.cart[key].product.price * this.cart[key].qty);
        }
        return sum;
    },
    cartQty: function () {
        let qty = 0;
        for (let key in this.cart) {
            qty = qty + this.cart[key].qty;
        }
        return qty;
    }
  },

}

</script>


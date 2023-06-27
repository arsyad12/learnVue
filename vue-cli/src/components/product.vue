<template>
    <div>
        <h1>ID Shop</h1>
  <navbar :cart="cart" :cartQty="cartQty" :cartTotal="cartTotal" @toggle="toggleSliderStatus" @delete="deleteItem"></navbar>
  <p class="animate__animated animate__fadeInRight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste officiis beatae temporibus accusamus aliquid mollitia alias commodi fugit blanditiis nostrum, eum consequatur quidem voluptas esse quaerat ex facilis dolore voluptatibus.</p>
  <!-- <font-awesome-icon icon="shopping-cart"></font-awesome-icon> -->
  <!-- <price :value="4.5"></price> -->
  <price-slider :sliderStatus="sliderStatus"></price-slider>
  <product-list :maximum="maximum" :products="products" @add="addItem"></product-list>

    </div>
</template>

<script>

import navbar from "./navbar.vue";

import ProductList from "./ProductList.vue"

import PriceSlider from "./PriceSlider.vue";

    export default {
        
        name : "products",
        props : [
        'products',
		'maximum',
		'cart',
		'cartQty',
		'cartTotal',
		'sliderStatus',
		'sliderState',
        ],

        components:{
            navbar,
            ProductList,
            PriceSlider

        },


        methods: {
            toggleSliderStatus : function () {
                this.$emit('toggle')
            },
            addItem : function (item) {
                this.$emit('add',item)
            },
           deleteItem: function (index) {
            this.$emit('delete',index)
           } 
        },
    }


</script>

<style lang="scss" scoped>

</style>
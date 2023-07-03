<!-- eslint-disable vue/no-unused-components -->
<template>
    <div>
<h1>Check Out</h1>

<table class="table table-hover" v-if="cart.length">
    
    
    <caption class="text-rigth h3">
        <b>Total :
            <price class="d-block text-success font-weight-light" :value="Number(cartTotal)"></price>
        </b>
    </caption>

    <thead>
        <tr>
            <th scope="col"></th>
            <th scope="col">item</th>
            <th scope="col" class="text-center">Quantity</th>
            <th scope="col" class="text-right">Price</th>
            <th scope="col" class="text-right">Sub-total</th>
        </tr>
    </thead>

    <tbody>
        <tr v-for="(item, index) in cart" :key="item.product.id">
            <td class="text-center">
                <div class="button-group">
                    <button class="btn btn-info" @click="$emit('add',item.product)">+</button>
                    <button class="btn btn-danger" @click="$emit('delete',index)">-</button>
                </div>
            </td>
            <th scope="row">{{ item.product.name }}</th>
            <th class="text-center">{{ item.qty }}</th>
            <th class="text-right">{{ Number(item.product.price) }}</th>
            <th class="text-right">{{ Number(item.product.price) * item.qty }}</th>

        </tr>
    </tbody>


</table>


<router-link class="btn btn-sm btn-outline-info text-dark" to="/">Back To Shop</router-link>

    </div>
</template>

<script>

import price from "./price.vue"


    export default {
        name : "checkout",
        props :["cart","cartTotal"],

        components:{
            // eslint-disable-next-line vue/no-unused-components
            price
        }
    }


</script>

<style lang="scss" scoped>

</style>
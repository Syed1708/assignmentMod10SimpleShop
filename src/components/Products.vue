<script setup>
import {ref, reactive, onBeforeMount} from 'vue'
import axios from 'axios'

const products = ref([])

onBeforeMount(()=>{

    fetch(`https://dummyjson.com/products?limit=10`)
    .then(res=>res.json())
    .then (data=>{
        products.value = data.products
    })
})

// to load more products
// or pagination
function loadMore() {
    axios.get('https://dummyjson.com/products?limit=10&skip=10')
        .then(res => {
            products.value = [...products.value, ...res.data.products]
        })
}

</script>
<template>
    <!-- <h1 class="text-2xl mb-3">This is Products page {{ products.length }}</h1> -->
    <h1 class="text-2xl mb-3"> Products List </h1>
    <hr/>
    <article class="mb-10" v-for="product in products" :key="product.id">
    <!-- <article class="mb-10" > -->
        <h1 class="text-xl mb-2">
           
            <router-link :to="{ name: 'product', params: { id: product.id } }">{{ product.title }}</router-link>
            <!-- {{ product.title }} -->
        </h1>
        <hr/>
        <p class="mt-4">
            <router-link :to="{ name: 'product', params: { id: product.id } }">
                <!-- <img :src="`//source.unsplash.com/random/300x200?1`" alt=""> -->
                <img :src="product.thumbnail" :alt="product.title">
            </router-link>
           Price:  $ {{ product.price }}


        </p>

        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
             v-if="products.length>0"
            >
            <router-link :to="{ name: 'product', params: { id: product.id } }">
                More Details
            </router-link>
       
            </button>
            
    </article>
    <button @click="loadMore()"
     class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
    v-if="products.length>0"
    >
        Load More
    </button>
</template>

<style></style>
<script setup>
import { useRoute } from 'vue-router';
import { ref, reactive, onBeforeMount } from 'vue'
import axios from 'axios'
const route = useRoute()
const id = route.params.id

const singleProduct = reactive({})


// load sinple post from API with id
onBeforeMount(()=>{

    //without axios
    // fetch(`https://dummyjson.com/products/${id}`)
    // .then(res=> res.json())
    // .then(data=>{
    //     singleProduct.id = data.id
    //     singleProduct.title = data.title
    //     singleProduct.body = data.body
    // })

    // with axios

    axios.get(`https://dummyjson.com/product/${id}`)
        .then(res => {
            singleProduct.id = res.data.id
            singleProduct.title = res.data.title
            singleProduct.thumbnail = res.data.thumbnail
            singleProduct.description = res.data.description
            singleProduct.price = res.data.price
            singleProduct.images = res.data.images
        })

   


})




</script>
<template>

    <article class="mb-10">
            <h1 class="text-xl mb-5 uppercase font-bold text-purple-400 ">
                <!-- {{ singleProduct.id }} -->
                {{ singleProduct.title }}
            </h1>
            <hr/>
            
        <!-- <h1 class="text-2xl mb-3">This is Post {{ $route.params.id }}</h1> -->
        <!-- <h1 class="text-2xl mb-3">This is Post {{ id }}</h1> -->
        <!-- <h1 class="text-2xl mb-3">This is Post {{ singleProduct.title }}</h1> -->
            <p class="mt-10 ">{{ singleProduct.description }}</p>
        <p class="mt-10">
            <img :src="singleProduct.thumbnail" :alt="singleProduct.title">
            <strong>  Price:  $</strong> {{ singleProduct.price }}

        </p>

        <p class="mt-10 mb-10 p-5 border text-center font-bold text-purple-500 uppercase">More Products Photos</p>
        <template v-for="(image,index) in singleProduct.images" :key="index">
            <img class="mb-2 ml-2 border rounded-md text-left inline-block " :src="image" :alt="index">
        </template>
        <p >
            
        </p>
    </article>


</template>

<style></style>
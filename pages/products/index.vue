<template>
    <div>
        <div class="py-3 mb-4 shadow-sm bg-warning border-top">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h6 class="mb-0">Products</h6>      
                    </div>
                    <div class="col-2 float-right">
                        <NuxtLink to="/products/add-product" class="btn btn-primary float-right">Add Products</NuxtLink>
                    </div>
                </div>
            </div>       
        </div>   

        <div class="py-5">
            <div class="container">
                    <div class="row">
                    
                    
                            <div v-for="product in productStore.products" class="col-md-3 mb-3">
                                    <div class="card">
                                    <NuxtLink :to="`/products/${product.id}`">
                                    
                                        <img :src="product.image" :alt="product.title" class="w-100" />
                                        <div class="card-body">
                                                <h5>{{product.name}}</h5>
                                                <span class="float-start">${{ product.price }}</span>
                                                <span class="float-end"><s>${{ product.price }}</s></span>
                                        </div>
                                
                                    </NuxtLink>   
                                    </div>   

                            </div>



                    </div>
            </div>
        </div>



    </div>
</template>
<script setup>
import { useProduct } from '@/stores/product.js'
const productStore=useProduct()



</script>
  
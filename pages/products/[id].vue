<template>
    <div>
        {{$route.params.id}}
        {{product}}

        <div class="py-3 mb-4 shadow-sm bg-warning border-top">
            <div class="container">
                    <h6 class="mb-0">Product View</h6>      
            </div>       
        </div>      


        <div class="container">
            <div class="card shadow product_data">
                    <div class="card-body">
                        <div class="row">
                            <form>
                                <div class="col-md-4 border-roght">
                                    <img src="/products/oppo.jpg" alt="image" class="w-100">
                                </div>
                                <div class="col-md-8">
                                    <h2 class="mb-0">
                                            Name
                                            <label style="font-size:16px;" class="float-end badge bg-danger trending_tag">Trending</label>
                                    </h2>
                                    <hr>
                                    <label class="me-3">Original Price: <s>$ 34</s></label>
                                    <label class="fw-bold">Selling Price: $32</label>

                                    <div class="row mt-2">
                                            <div class="col-md-3">
                                                        <input type="hidden" value="{{$product->id}}" class="prod_id">
                                                        <label for="quantity">Quantity</label>
                                                        <div class="input-group text-center mb-3" style="width:130px;">
                                                            <button type="button" class="input-group-text" @click="decrement()">-</button>
                                                            <input type="text" v-model="quantity" name="quantity" class="form-control qty-input text-center" />
                                                            <button type="button" class="input-group-text"  @click="increment()">+</button>      
                                                        </div>       
                                            </div> 
                                        </div> 

                                                

                                        <button type="button" class="btn btn-primary me-3 float-start  addToCartBtn">Add to Cart <i class="fa fa-shopping-cart"></i></button>                                          
                                </div>

                            </form>
                        </div>

                        <div class="row">
                                <div class="col-md-12">
                                    <hr>
                                    <h5>Description</h5>
                                    <p class="mt-3">
                                            uewqueiq weqwie wid iwuyeqw deiurqwid iuewiu we
                                    </p>                              
                            </div> 
                        </div>

                        <hr>

                    </div>
            </div>
        </div>



    </div>
</template>




<script setup>
import { useProduct } from '@/stores/product.js'
const productStore=useProduct()
const route= useRoute()

const product= productStore.getProduct(route.params.id)
console.log(product)


const quantity=ref(1)
console.log(quantity.value)


function increment()
{
    quantity.value++
}
function decrement()
{
    if(quantity.value>0) quantity.value--
}


</script>
  



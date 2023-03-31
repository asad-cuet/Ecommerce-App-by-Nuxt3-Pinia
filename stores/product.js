import { defineStore } from 'pinia'


export const useProduct = defineStore('product', () => {

    const products=ref([
        {
            id:1,
            name:"Oppo A5",
            image:"/products/oppo.jpg",
            sale_price:5000,
            original_price:50500,
        },
        {
            id:2,
            name:"Samsung Galaxy",
            image:"/products/samsung.jpg",
            sale_price:7000,
            original_price:7500,
        },
        {
            id:3,
            name:"T Shirt",
            image:"/products/t_shirt.jpg",
            sale_price:700,
            original_price:800,
        },
    ])
    
        
    

    // const doubleCount = computed(() => count.value * 2)
    // function appendProduct(formData) {

    // }
    function getProduct(_id) {
        return products.value.find(product=> {
            if(product.id.toString() === _id)
            {
                console.log(product.id)
                return product
            }
        })

    }
    // function updateProduct(fromData,id) {

    // }
    // function deleteProduct(id) {

    // }
  
    return { products, getProduct }
  },{
    persist: true,
  })
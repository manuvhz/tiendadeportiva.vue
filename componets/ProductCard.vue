<template>
  <div class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl relative">
    <!-- Círculo de descuento -->
    <div 
      v-if="product.discount" 
      class="absolute top-2 right-2 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold z-10 animate-pulse"
    >
      -{{ product.discount }}%
    </div>
    
    <img :src="product.image" :alt="product.name" class="h-56 w-full object-cover">
    
    <div class="p-4">
      <h3 class="text-lg font-bold mb-1">{{ product.name }}</h3>
      <p class="text-gray-600 text-sm mb-3">{{ product.description }}</p>
      
      <div class="flex items-center gap-2 mb-3">
        <span class="text-lg font-bold text-blue-600">{{ formatPrice(product.price) }}</span>
        <span v-if="product.originalPrice" class="text-gray-500 line-through">{{ formatPrice(product.originalPrice) }}</span>
      </div>
      
      <button 
        @click="addToCart" 
        class="w-full bg-blue-600 text-white font-bold py-2 rounded transition-colors hover:bg-blue-700"
      >
        <i class="fas fa-shopping-cart mr-2"></i> Añadir al carrito
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '~/stores/cart'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const cartStore = useCartStore()
const buttonText = ref('<i class="fas fa-shopping-cart mr-2"></i> Añadir al carrito')

const formatPrice = (price) => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  }).format(price)
}

const addToCart = (event) => {
  cartStore.addItem(props.product)
  
  // Efecto visual de confirmación
  buttonText.value = "¡Añadido!"
  
  setTimeout(() => {
    buttonText.value = '<i class="fas fa-shopping-cart mr-2"></i> Añadir al carrito'
  }, 1000)
}
</script>
<template>
  <div>
    <!-- Overlay -->
    <Transition name="fade">
      <div 
        v-if="cartStore.isOpen" 
        class="fixed inset-0 bg-black bg-opacity-50 z-40"
        @click="cartStore.closeCart"
      ></div>
    </Transition>

    <!-- Cart Modal -->
    <div 
      class="fixed top-0 right-0 w-full md:w-96 h-full bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out"
      :class="cartStore.isOpen ? 'translate-x-0' : 'translate-x-full'"
    >
      <div class="flex justify-between items-center p-4 border-b">
        <h2 class="text-xl font-bold">Tu Carrito</h2>
        <button class="text-2xl" @click="cartStore.closeCart">&times;</button>
      </div>

      <div v-if="cartStore.items.length === 0" class="p-8 text-center text-gray-500">
        <i class="fas fa-shopping-cart text-4xl mb-4"></i>
        <p>Tu carrito está vacío</p>
      </div>

      <div v-else class="overflow-y-auto max-h-[calc(100vh-200px)] p-4">
        <div 
          v-for="item in cartStore.items" 
          :key="item.id" 
          class="flex mb-4 pb-4 border-b"
        >
          <img :src="item.image" :alt="item.name" class="w-20 h-20 object-cover rounded">
          
          <div class="ml-4 flex-grow">
            <div class="font-bold">{{ item.name }}</div>
            <div class="text-blue-600 font-bold">{{ formatPrice(item.price) }}</div>
            
            <div class="flex items-center mt-2">
              <button 
                @click="cartStore.decreaseQuantity(item.id)" 
                class="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center"
              >-</button>
              <span class="mx-2">{{ item.quantity }}</span>
              <button 
                @click="cartStore.increaseQuantity(item.id)" 
                class="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center"
              >+</button>
            </div>
          </div>
          
          <button 
            @click="cartStore.removeItem(item.id)" 
            class="text-red-600 text-lg"
          >
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </div>

      <div v-if="cartStore.items.length > 0" class="p-4 border-t flex justify-between font-bold text-lg">
        <span>Total:</span>
        <span>{{ formatPrice(cartStore.total) }}</span>
      </div>

      <button 
        v-if="cartStore.items.length > 0"
        class="bg-pink-600 text-white font-bold py-3 w-[calc(100%-2rem)] mx-4 my-4 rounded hover:bg-pink-700 transition-colors"
      >
        Proceder al pago
      </button>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '~/stores/cart'

const cartStore = useCartStore()

const formatPrice = (price) => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  }).format(price)
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
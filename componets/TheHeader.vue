<template>
  <header class="bg-white shadow-md sticky top-0 z-50">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center py-4">
        <NuxtLink to="/" class="text-2xl font-bold">
          <span class="text-blue-600">Atleti</span><span class="text-pink-600">Fit</span>
        </NuxtLink>

        <nav class="hidden md:flex space-x-6">
          <NuxtLink to="/" class="font-medium hover:text-blue-600 transition-colors">Inicio</NuxtLink>
          <NuxtLink to="#productos" class="font-medium hover:text-blue-600 transition-colors">Productos</NuxtLink>
          <NuxtLink to="/hombres" class="font-medium hover:text-blue-600 transition-colors">Hombres</NuxtLink>
          <NuxtLink to="/mujeres" class="font-medium hover:text-blue-600 transition-colors">Mujeres</NuxtLink>
          <NuxtLink to="/ofertas" class="font-medium hover:text-blue-600 transition-colors">Ofertas</NuxtLink>
          <NuxtLink to="/contacto" class="font-medium hover:text-blue-600 transition-colors">Contacto</NuxtLink>
        </nav>

        <div class="relative cursor-pointer" @click="toggleCart">
          <i class="fas fa-shopping-cart text-lg"></i>
          <div 
            v-if="cartStore.totalItems > 0" 
            class="absolute -top-2 -right-2 bg-pink-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold"
          >
            {{ cartStore.totalItems }}
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useCartStore } from '~/stores/cart'

const cartStore = useCartStore()

const toggleCart = () => {
  cartStore.toggleCart()
}
</script>
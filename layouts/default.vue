<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Barra de navegación -->
    <nav class="bg-white shadow-md p-4">
      <div class="container mx-auto flex justify-between items-center">
        <NuxtLink to="/" class="text-2xl font-bold text-purple-700">AuraSport</NuxtLink>
        <div class="flex items-center gap-4">
          <NuxtLink to="/carrito" class="flex items-center text-gray-700 hover:text-purple-700">
            <span class="mr-2">Carrito</span>
            <div class="relative">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span class="absolute -top-2 -right-2 bg-purple-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {{ $carrito.length }}
              </span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </nav>
    
    <!-- Contenido principal -->
    <main class="container mx-auto py-8 px-4">
      <slot />
    </main>
    
    <!-- Pie de página -->
    <footer class="bg-gray-800 text-white p-4 text-center">
      <p>© 2025 AuraSport - Todos los derechos reservados</p>
    </footer>
    
    <!-- Componente Toast para notificaciones -->
    <Toast />
  </div>
</template>

<script setup>
// Estado del carrito
const $carrito = useState('carrito', () => []);
</script>
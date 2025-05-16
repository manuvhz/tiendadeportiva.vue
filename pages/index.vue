<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16 text-center">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 fade-in-up">SUPERA TUS LÍMITES</h1>
        <p class="text-xl max-w-2xl mx-auto mb-8 fade-in-up">
          Descubre nuestra nueva colección de ropa deportiva diseñada para maximizar tu rendimiento
        </p>
        <a 
          href="#productos" 
          class="bg-pink-600 text-white font-bold px-6 py-3 rounded hover:bg-pink-700 inline-block transition-all hover:-translate-y-1 fade-in-up"
        >
          Ver Productos
        </a>
      </div>
    </section>

    <!-- Products Section -->
    <section id="productos" class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-10 text-blue-600">Productos Destacados</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProductCard 
            v-for="product in productsStore.featuredProducts" 
            :key="product.id" 
            :product="product" 
          />
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16 bg-gray-100">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-truck text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">Envío Gratis</h3>
            <p class="text-gray-600">En todos los pedidos superiores a $150.000 COP</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-medal text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">Calidad Garantizada</h3>
            <p class="text-gray-600">Los mejores materiales para tu rendimiento deportivo</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <i class="fas fa-undo text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">Devoluciones Sencillas</h3>
            <p class="text-gray-600">30 días para cambios o devoluciones sin problemas</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useProductsStore } from '~/stores/products'

const productsStore = useProductsStore()

// Animaciones con onMounted
onMounted(() => {
  // Añadir clases de animación a los elementos
  const fadeElements = document.querySelectorAll('.fade-in-up')
  fadeElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('visible')
    }, index * 200)
  })
})
</script>

<style scoped>
.fade-in-up {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in-up.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
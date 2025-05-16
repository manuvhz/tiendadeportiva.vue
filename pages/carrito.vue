<script setup>
import { useToast } from '~/composables/useToast';
import { useCarritoStore } from '~/stores/carrito'; // Asegúrate de crear este store

const carritoStore = useCarritoStore();
const { mostrarToast } = useToast();

// Funciones modificadas para usar el store
const incrementarCantidad = (index) => {
  carritoStore.incrementarCantidad(index);
};

const decrementarCantidad = (index) => {
  if (carritoStore.carrito[index].cantidad > 1) {
    carritoStore.decrementarCantidad(index);
  } else {
    eliminarDelCarrito(index);
  }
};

const eliminarDelCarrito = (index) => {
  const nombreProducto = carritoStore.carrito[index].nombre;
  carritoStore.eliminarProducto(index);
  mostrarToast(`${nombreProducto} eliminado del carrito`);
};

// Calculadoras modificadas para usar el store
const calcularSubtotal = () => {
  return carritoStore.subtotal;
};

const calcularIVA = () => {
  return carritoStore.iva;
};

const calcularTotal = () => {
  return carritoStore.total;
};

const formatearPrecio = (precio) => {
  return Math.round(precio).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

const procesarPago = () => {
  mostrarToast('¡Gracias por tu compra!', 'success');
  setTimeout(() => {
    carritoStore.vaciarCarrito();
    navigateTo('/');
  }, 2000);
};
</script>

<template>
  <!-- Cambia todas las referencias de $carrito a carritoStore.carrito -->
  <div>
    <h1 class="text-3xl font-bold text-center mb-8">Tu Carrito</h1>
    
    <div v-if="carritoStore.carrito.length === 0" class="text-center py-8">
      <p class="text-xl text-gray-600">Tu carrito está vacío</p>
      <NuxtLink to="/" class="inline-block mt-4 bg-purple-600 text-white py-2 px-6 rounded hover:bg-purple-700">
        Ver productos
      </NuxtLink>
    </div>
    
    <div v-else>
      <div class="bg-white rounded-lg shadow-md p-6 mb-6">
        <div v-for="(item, index) in carritoStore.carrito" :key="item.id" class="flex flex-col md:flex-row items-center py-4 border-b last:border-b-0">
          <!-- ... resto del template igual pero usando carritoStore.carrito ... -->
        </div>
      </div>
    </div>
  </div>
</template>
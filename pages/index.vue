<template>
  <div>
    <h1 class="text-3xl font-bold text-center mb-8">Ropa Deportiva AuraSport</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="producto in productos" :key="producto.id" class="bg-white rounded-lg shadow-md overflow-hidden relative">
        <!-- Círculo de descuento -->
        <div v-if="producto.descuento" class="absolute top-2 right-2 w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center font-bold z-10">
          -{{ producto.descuento }}%
        </div>
        
        <img :src="producto.imagen" :alt="producto.nombre" class="w-full h-64 object-cover">
        
        <div class="p-4">
          <h2 class="text-xl font-semibold mb-2">{{ producto.nombre }}</h2>
          <div class="flex items-center mb-4">
            <span v-if="producto.descuento" class="line-through text-gray-500 mr-2">
              ${{ formatearPrecio(producto.precioOriginal) }}
            </span>
            <span class="text-xl font-bold text-purple-700">
              ${{ formatearPrecio(producto.precio) }}
            </span>
          </div>
          <p class="text-gray-600 mb-4">{{ producto.descripcion }}</p>
          <button @click="agregarAlCarrito(producto)" 
                  class="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useToast } from '~/composables/useToast';

// Datos de productos
const productos = [
  {
    id: 1,
    nombre: "Camiseta deportiva transpirable",
    descripcion: "Camiseta de alto rendimiento para entrenamientos intensos",
    precioOriginal: 89000,
    precio: 69900,
    descuento: 20,
    imagen: "https://leonisa.co/cdn/shop/files/508039_457_1200X1500_1_480x.jpg?v=1747255297"
  },
  {
    id: 2,
    nombre: "Leggings de compresión",
    descripcion: "Leggings de compresión para mayor rendimiento muscular",
    precioOriginal: 120000,
    precio: 84000,
    descuento: 30,
    imagen: "https://via.placeholder.com/400x300?text=Leggings"
  },
  {
    id: 3,
    nombre: "Zapatillas Running Pro",
    descripcion: "Zapatillas diseñadas para corredores profesionales",
    precioOriginal: 250000,
    precio: 225000,
    descuento: 10,
    imagen: "https://via.placeholder.com/400x300?text=Zapatillas"
  },
  {
    id: 4,
    nombre: "Sudadera con capucha",
    descripcion: "Sudadera cómoda y ligera para tus entrenamientos",
    precio: 75000,
    imagen: "https://via.placeholder.com/400x300?text=Sudadera"
  }
];

// Manejar el carrito
const $carrito = useState('carrito', () => []);
const { mostrarToast } = useToast();

// Función para agregar productos al carrito
const agregarAlCarrito = (producto) => {
  // Verificar si el producto ya está en el carrito
  const itemEnCarrito = $carrito.value.find(item => item.id === producto.id);
  
  if (itemEnCarrito) {
    // Si el producto ya existe, aumentar la cantidad
    itemEnCarrito.cantidad += 1;
  } else {
    // Si no existe, agregar el producto con cantidad 1
    $carrito.value.push({
      ...producto,
      cantidad: 1
    });
  }
  
  // Mostrar notificación
  mostrarToast(`${producto.nombre} agregado al carrito`);
};

// Función para formatear precios
const formatearPrecio = (precio) => {
  return precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
</script>
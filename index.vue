<template>
  <v-card class="product-card mx-auto" max-width="300" elevation="3">
    <!-- Badge circular de descuento (esquina superior derecha) -->
    <div class="discount-badge" v-if="product.discount > 0">
      <span class="discount-text">-{{ Math.round(product.discount * 100) }}%</span>
    </div>
    
    <!-- Imagen del producto con animación -->
    <v-img
      :src="product.image || 'https://via.placeholder.com/300'"
      :alt="product.name"
      class="product-image"
      height="200"
      cover
      gradient="to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0)"
    >
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
        </v-row>
      </template>
    </v-img>
    
    <v-card-title class="text-center px-4 pt-4 pb-0 font-weight-bold">{{ product.name }}</v-card-title>
    
    <v-card-text class="px-4 pb-4 pt-2">
      <div class="d-flex justify-space-between align-center">
        <div>
          <!-- Precio con descuento -->
          <p class="text-h6 mb-0 primary--text font-weight-bold">
            {{ formatPrice(calculateDiscountPrice(product.price, product.discount)) }}
          </p>
          <!-- Precio original tachado -->
          <p class="text-caption text-decoration-line-through text--disabled" v-if="product.discount > 0">
            {{ formatPrice(product.price) }}
          </p>
        </div>
        <v-btn
          color="primary"
          variant="elevated"
          @click="addToCart"
          :loading="loading"
          prepend-icon="mdi-cart-plus"
          class="buy-button"
          size="small"
        >
          Comprar
        </v-btn>
      </div>
    </v-card-text>
    
    <!-- Efecto hover para pantallas grandes -->
    <div class="hover-overlay"></div>
  </v-card>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  product: {
    type: Object,
    required: true,
    default: () => ({
      id: 1,
      name: 'Producto Deportivo',
      price: 150000,
      discount: 0.3, // 30% de descuento
      image: '',
      category: 'fitness'
    })
  }
});

const emit = defineEmits(['add-to-cart']);

const loading = ref(false);

// Formatear precio en pesos colombianos
const formatPrice = (price) => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0
  }).format(price);
};

// Calcular precio con descuento
const calculateDiscountPrice = (price, discount) => {
  return price * (1 - discount);
};

// Manejar añadir al carrito
const addToCart = () => {
  loading.value = true;
  emit('add-to-cart', props.product);
  // Simular carga
  setTimeout(() => {
    loading.value = false;
  }, 800);
};
</script>

<style scoped>
.product-card {
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  border-radius: 12px !important;
  margin-bottom: 24px;
  cursor: pointer;
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
}

.product-image {
  transition: transform 0.5s ease;
}

.product-card:hover .product-image {
  transform: scale(1.05);
}

/* Badge circular de descuento */
.discount-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 50px;
  height: 50px;
  background-color: #ff5252;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  z-index: 2;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  animation: pulse 2s infinite;
}

.discount-text {
  font-size: 14px;
  font-weight: 800;
}

/* Animación del botón */
.buy-button {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.buy-button:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15) !important;
}

/* Efecto hover overlay */
.hover-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.03);
  opacity: 0;
  transition: opacity 0.3s;
}

.product-card:hover .hover-overlay {
  opacity: 1;
}

/* Animación de pulso para el badge */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

/* Responsive */
@media (max-width: 600px) {
  .product-card {
    max-width: 100% !important;
  }
}
</style>
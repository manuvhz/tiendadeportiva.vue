<template>
  <div>
    <header>
      <div class="container header-content">
        <div class="logo">AURA<span>SPORT</span></div>
        <div class="cart-icon" @click="toggleCart">
          🛒 <span class="cart-count">{{ cartCount }}</span>
        </div>
      </div>
    </header>

    <main class="container">
      <h1 class="main-title">COLECCIÓN PERFORMANCE</h1>
      <p class="subtitle">Diseñado para atletas, creado para rendir</p>
      
      <div class="products-grid">
        <div 
          v-for="product in products" 
          :key="product.id" 
          class="product-card"
          @click="addToCart(product)"
        >
          <div v-if="product.discount" class="discount-badge">
            -{{ calculateDiscountPercentage(product) }}%
          </div>
          <img :src="product.image" :alt="product.name" class="product-image">
          <div class="product-info">
            <h3 class="product-title">{{ product.name }}</h3>
            <div class="product-price">
              <span class="current-price">${{ formatPrice(product.discount || product.price) }} COP</span>
              <span v-if="product.discount" class="original-price">${{ formatPrice(product.price) }} COP</span>
            </div>
            <button class="add-to-cart">AÑADIR AL CARRITO</button>
          </div>
        </div>
      </div>
    </main>

    <!-- Modal del Carrito -->
    <div class="cart-modal" :class="{ 'show-cart': showCart }" @click.self="toggleCart">
      <div class="cart-content">
        <div class="cart-header">
          <h2>TU CARRITO</h2>
          <span class="close-cart" @click="toggleCart">&times;</span>
        </div>
        <div class="cart-items">
          <div 
            v-for="item in cartItems" 
            :key="item.id" 
            class="cart-item"
          >
            <div class="cart-item-info">
              <img :src="item.image" :alt="item.name" class="cart-item-image">
              <div class="cart-item-details">
                <h3>{{ item.name }}</h3>
                <p class="cart-item-price">${{ formatPrice(item.discount || item.price) }} COP x {{ item.quantity }}</p>
              </div>
            </div>
            <span class="cart-item-remove" @click.stop="removeFromCart(item)">✕</span>
          </div>
        </div>
        <div class="cart-total">
          <p>Total: <span>${{ formatPrice(cartTotal) }}</span> COP</p>
          <button class="checkout-btn">FINALIZAR COMPRA</button>
        </div>
      </div>
    </div>

    <footer>Manuel Vargas / Jean Álvarez / Andrés Buelvas / Isaac Martinez / Luis Noriega</footer>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Datos de productos
const products = ref([
  {
    id: 1,
    name: 'Sudadera Performance Pro',
    price: 159900,
    discount: 129900,
    image: 'https://static.futbolfactory.es/products/249142_1.jpg'
  },
  {
    id: 2,
    name: 'Leggings Compresión Elite',
    price: 119900,
    discount: 89900,
    image: 'https://www.sportline.com.co/media/catalog/product/c/z/cz9803-013-phsfm001-1000.png'
  },
  {
    id: 3,
    name: 'Zapatillas Carbon X',
    price: 359900,
    discount: 299900,
    image: 'https://nikeco.vtexassets.com/arquivos/ids/720042-500-500?v=638708412465200000'
  },
  {
    id: 4,
    name: 'Top Deportivo Aerobic',
    price: 79900,
    discount: 64900,
    image: 'https://nikeco.vtexassets.com/arquivos/ids/659384/HF7324_629_A_PREM.jpg'
  },
  {
    id: 5,
    name: 'Playera Sportswear',
    price: 79900,
    discount: 64900,
    image: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/jnighv6j24navz8l7xa5/M+NSW+TEE+ICON+FUTURA.png'
  },
  {
    id: 6,
    name: 'Brasier Deportivo Sprinter',
    price: 59900,
    discount: 34900,
    image: 'https://resize.sprintercdn.com/b/1440x2160/products/0396077/nike-indy-flower_0396077_00_5_505985981.jpg'
  }
])

// Lógica del carrito
const showCart = ref(false)
const cartItems = ref([])

const toggleCart = () => {
  showCart.value = !showCart.value
}

const addToCart = (product) => {
  const existingItem = cartItems.value.find(item => item.id === product.id)
  
  if (existingItem) {
    existingItem.quantity++
  } else {
    cartItems.value.push({
      ...product,
      quantity: 1
    })
  }
  
  // Animación
  const cartIcon = document.querySelector('.cart-icon')
  cartIcon.classList.add('animate')
  setTimeout(() => {
    cartIcon.classList.remove('animate')
  }, 500)
}

const removeFromCart = (item) => {
  cartItems.value = cartItems.value.filter(cartItem => cartItem.id !== item.id)
}

// Calculos computados
const cartTotal = computed(() => {
  return cartItems.value.reduce((total, item) => {
    return total + ((item.discount || item.price) * item.quantity)
  }, 0)
})

const cartCount = computed(() => {
  return cartItems.value.reduce((count, item) => {
    return count + item.quantity
  }, 0)
})

// Funciones de ayuda
const formatPrice = (price) => {
  return new Intl.NumberFormat('es-CO').format(price)
}

const calculateDiscountPercentage = (product) => {
  return Math.round(100 - (product.discount / product.price * 100))
}
</script>

<style scoped src="~/assets/css/styles.css"></style>

<style>
/* Animaciones adicionales */
.show-cart {
  display: flex !important;
}

.animate {
  animation: bounce 0.5s;
}

@keyframes bounce {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}

.discount-badge {
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}
</style>

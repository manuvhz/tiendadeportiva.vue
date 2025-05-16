import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [
      {
        id: 1,
        name: "Camiseta Deportiva ProFit",
        description: "Camiseta deportiva de alto rendimiento con tecnología de secado rápido y control de humedad.",
        price: 89900,
        originalPrice: 129900,
        discount: 30,
        image: "/api/placeholder/400/320",
        category: "camisetas",
        inStock: true
      },
      {
        id: 2,
        name: "Leggings Elite Performance",
        description: "Leggings de compresión con soporte muscular y tejido transpirable para máximo rendimiento.",
        price: 159900,
        originalPrice: 199900,
        discount: 20,
        image: "/api/placeholder/400/320",
        category: "pantalones",
        inStock: true
      },
      {
        id: 3,
        name: "Zapatillas Running AeroSpeed",
        description: "Zapatillas de running con amortiguación premium y soporte para carreras de larga distancia.",
        price: 249900,
        originalPrice: 349900,
        discount: 25,
        image: "/api/placeholder/400/320",
        category: "calzado",
        inStock: true
      },
      {
        id: 4,
        name: "Chaqueta Térmica WindBlock",
        description: "Chaqueta térmica ligera con protección contra viento y agua para entrenamientos al aire libre.",
        price: 199900,
        originalPrice: 259900,
        discount: 15,
        image: "/api/placeholder/400/320",
        category: "chaquetas",
        inStock: true
      }
    ]
  }),
  
  getters: {
    featuredProducts: (state) => state.products.slice(0, 4),
    
    getProductById: (state) => (id) => {
      return state.products.find(product => product.id === id)
    }
  }
})

import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
    isOpen: false
  }),
  
  getters: {
    totalItems: (state) => {
      return state.items.reduce((total, item) => total + item.quantity, 0)
    },
    
    total: (state) => {
      return state.items.reduce((total, item) => total + (item.price * item.quantity), 0)
    }
  },
  
  actions: {
    addItem(product) {
      const existingItem = this.items.find(item => item.id === product.id)
      
      if (existingItem) {
        existingItem.quantity++
      } else {
        this.items.push({
          ...product,
          quantity: 1
        })
      }
      
      // Abrir el carrito al añadir un producto
      this.isOpen = true
    },
    
    removeItem(productId) {
      const index = this.items.findIndex(item => item.id === productId)
      if (index !== -1) {
        this.items.splice(index, 1)
      }
    },
    
    increaseQuantity(productId) {
      const item = this.items.find(item => item.id === productId)
      if (item) {
        item.quantity++
      }
    },
    
    decreaseQuantity(productId) {
      const item = this.items.find(item => item.id === productId)
      if (item && item.quantity > 1) {
        item.quantity--
      } else {
        this.removeItem(productId)
      }
    },
    
    toggleCart() {
      this.isOpen = !this.isOpen
    },
    
    closeCart() {
      this.isOpen = false
    }
  }
})
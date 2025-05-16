// plugins/carritoHandler.client.js
export default defineNuxtPlugin(() => {
  if (process.client) {
    // Espera a que el DOM esté listo
    setTimeout(() => {
      // Selecciona todos los botones "Agregar al carrito"
      const buttons = document.querySelectorAll('button:contains("Agregar al carrito")');
      
      buttons.forEach(button => {
        button.addEventListener('click', function() {
          // Encuentra el producto correspondiente en el DOM
          const productCard = this.closest('.bg-white.rounded-lg');
          const product = {
            id: generateUniqueId(), // Necesitarás una función para generar IDs
            nombre: productCard.querySelector('h2').textContent,
            precio: parsePrice(productCard.querySelector('.text-purple-700').textContent),
            imagen: productCard.querySelector('img').src,
            descripcion: productCard.querySelector('p.text-gray-600').textContent,
            cantidad: 1
          };
          
          // Agrega al carrito usando el store
          const carritoStore = useCarritoStore();
          carritoStore.agregarProducto(product);
          
          // Muestra feedback al usuario
          alert(`${product.nombre} agregado al carrito`);
        });
      });
      
      // Función para parsear el precio
      function parsePrice(priceStr) {
        return parseInt(priceStr.replace(/\D/g, ''));
      }
      
      // Función simple para generar IDs
      function generateUniqueId() {
        return Math.floor(Math.random() * 1000000);
      }
    }, 500); // Pequeño delay para asegurar que el DOM esté listo
  }
});
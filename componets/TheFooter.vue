<template>
  <footer class="bg-gray-800 text-white pt-12 pb-6">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-pink-500 font-bold text-lg mb-4">AtletiFit</h3>
          <p class="mb-4">Tu mejor opción en ropa deportiva de alta calidad y rendimiento.</p>
          <div class="flex space-x-4">
            <a href="#" class="text-white hover:text-pink-500 transition-colors">
              <i class="fab fa-facebook text-xl"></i>
            </a>
            <a href="#" class="text-white hover:text-pink-500 transition-colors">
              <i class="fab fa-instagram text-xl"></i>
            </a>
            <a href="#" class="text-white hover:text-pink-500 transition-colors">
              <i class="fab fa-twitter text-xl"></i>
            </a>
            <a href="#" class="text-white hover:text-pink-500 transition-colors">
              <i class="fab fa-youtube text-xl"></i>
            </a>
          </div>
        </div>

        <div>
          <h3 class="text-pink-500 font-bold text-lg mb-4">Enlaces</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="/" class="hover:text-pink-500 transition-colors">Inicio</NuxtLink></li>
            <li><NuxtLink to="#productos" class="hover:text-pink-500 transition-colors">Productos</NuxtLink></li>
            <li><NuxtLink to="/nosotros" class="hover:text-pink-500 transition-colors">Sobre Nosotros</NuxtLink></li>
            <li><NuxtLink to="/blog" class="hover:text-pink-500 transition-colors">Blog</NuxtLink></li>
            <li><NuxtLink to="/contacto" class="hover:text-pink-500 transition-colors">Contacto</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h3 class="text-pink-500 font-bold text-lg mb-4">Ayuda</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="/faq" class="hover:text-pink-500 transition-colors">Preguntas Frecuentes</NuxtLink></li>
            <li><NuxtLink to="/envios" class="hover:text-pink-500 transition-colors">Envíos</NuxtLink></li>
            <li><NuxtLink to="/devoluciones" class="hover:text-pink-500 transition-colors">Devoluciones</NuxtLink></li>
            <li><NuxtLink to="/terminos" class="hover:text-pink-500 transition-colors">Términos y Condiciones</NuxtLink></li>
            <li><NuxtLink to="/privacidad" class="hover:text-pink-500 transition-colors">Política de Privacidad</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h3 class="text-pink-500 font-bold text-lg mb-4">Contacto</h3>
          <p>Calle Principal 123<br>Bogotá, Colombia</p>
          <p class="my-2">Email: info@atletifit.co</p>
          <p>Teléfono: +57 1234567890</p>
        </div>
      </div>

      <div class="text-center mt-8 pt-8 border-t border-gray-700">
        © {{ new Date().getFullYear() }} AtletiFit. Todos los derechos reservados.
      </div>
    </div>
  </footer>
</template>
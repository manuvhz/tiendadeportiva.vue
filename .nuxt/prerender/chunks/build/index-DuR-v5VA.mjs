import { resolveComponent, unref, useSSRContext } from 'file://C:/Users/varga/OneDrive/Documents/GitHub/tiendadeportiva.vue/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from 'file://C:/Users/varga/OneDrive/Documents/GitHub/tiendadeportiva.vue/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc, d as defineStore } from './server.mjs';
import 'file://C:/Users/varga/OneDrive/Documents/GitHub/tiendadeportiva.vue/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://C:/Users/varga/OneDrive/Documents/GitHub/tiendadeportiva.vue/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/varga/OneDrive/Documents/GitHub/tiendadeportiva.vue/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/varga/OneDrive/Documents/GitHub/tiendadeportiva.vue/node_modules/ufo/dist/index.mjs';
import '../_/nitro.mjs';
import 'file://C:/Users/varga/OneDrive/Documents/GitHub/tiendadeportiva.vue/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/varga/OneDrive/Documents/GitHub/tiendadeportiva.vue/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/varga/OneDrive/Documents/GitHub/tiendadeportiva.vue/node_modules/node-mock-http/dist/index.mjs';
import 'file://C:/Users/varga/OneDrive/Documents/GitHub/tiendadeportiva.vue/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/varga/OneDrive/Documents/GitHub/tiendadeportiva.vue/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/varga/OneDrive/Documents/GitHub/tiendadeportiva.vue/node_modules/nuxt/dist/core/runtime/nitro/utils/cache-driver.js';
import 'file://C:/Users/varga/OneDrive/Documents/GitHub/tiendadeportiva.vue/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/varga/OneDrive/Documents/GitHub/tiendadeportiva.vue/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/varga/OneDrive/Documents/GitHub/tiendadeportiva.vue/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/varga/OneDrive/Documents/GitHub/tiendadeportiva.vue/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/varga/OneDrive/Documents/GitHub/tiendadeportiva.vue/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/varga/OneDrive/Documents/GitHub/tiendadeportiva.vue/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/varga/OneDrive/Documents/GitHub/tiendadeportiva.vue/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/varga/OneDrive/Documents/GitHub/tiendadeportiva.vue/node_modules/unhead/dist/server.mjs';
import 'file://C:/Users/varga/OneDrive/Documents/GitHub/tiendadeportiva.vue/node_modules/devalue/index.js';
import 'file://C:/Users/varga/OneDrive/Documents/GitHub/tiendadeportiva.vue/node_modules/unhead/dist/utils.mjs';
import 'file://C:/Users/varga/OneDrive/Documents/GitHub/tiendadeportiva.vue/node_modules/unhead/dist/plugins.mjs';
import 'file://C:/Users/varga/OneDrive/Documents/GitHub/tiendadeportiva.vue/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/varga/OneDrive/Documents/GitHub/tiendadeportiva.vue/node_modules/vue-router/dist/vue-router.node.mjs';

const useProductsStore = defineStore("products", {
  state: () => ({
    products: [
      {
        id: 1,
        name: "Camiseta Deportiva ProFit",
        description: "Camiseta deportiva de alto rendimiento con tecnolog\xEDa de secado r\xE1pido y control de humedad.",
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
        description: "Leggings de compresi\xF3n con soporte muscular y tejido transpirable para m\xE1ximo rendimiento.",
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
        description: "Zapatillas de running con amortiguaci\xF3n premium y soporte para carreras de larga distancia.",
        price: 249900,
        originalPrice: 349900,
        discount: 25,
        image: "/api/placeholder/400/320",
        category: "calzado",
        inStock: true
      },
      {
        id: 4,
        name: "Chaqueta T\xE9rmica WindBlock",
        description: "Chaqueta t\xE9rmica ligera con protecci\xF3n contra viento y agua para entrenamientos al aire libre.",
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
      return state.products.find((product) => product.id === id);
    }
  }
});
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const productsStore = useProductsStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProductCard = resolveComponent("ProductCard");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-7d96c123><section class="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16 text-center" data-v-7d96c123><div class="container mx-auto px-4" data-v-7d96c123><h1 class="text-4xl md:text-5xl font-bold mb-4 fade-in-up" data-v-7d96c123>SUPERA TUS L\xCDMITES</h1><p class="text-xl max-w-2xl mx-auto mb-8 fade-in-up" data-v-7d96c123> Descubre nuestra nueva colecci\xF3n de ropa deportiva dise\xF1ada para maximizar tu rendimiento </p><a href="#productos" class="bg-pink-600 text-white font-bold px-6 py-3 rounded hover:bg-pink-700 inline-block transition-all hover:-translate-y-1 fade-in-up" data-v-7d96c123> Ver Productos </a></div></section><section id="productos" class="py-16" data-v-7d96c123><div class="container mx-auto px-4" data-v-7d96c123><h2 class="text-3xl font-bold text-center mb-10 text-blue-600" data-v-7d96c123>Productos Destacados</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-v-7d96c123><!--[-->`);
      ssrRenderList(unref(productsStore).featuredProducts, (product) => {
        _push(ssrRenderComponent(_component_ProductCard, {
          key: product.id,
          product
        }, null, _parent));
      });
      _push(`<!--]--></div></div></section><section class="py-16 bg-gray-100" data-v-7d96c123><div class="container mx-auto px-4" data-v-7d96c123><div class="grid grid-cols-1 md:grid-cols-3 gap-8" data-v-7d96c123><div class="text-center" data-v-7d96c123><div class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4" data-v-7d96c123><i class="fas fa-truck text-2xl" data-v-7d96c123></i></div><h3 class="text-xl font-bold mb-2" data-v-7d96c123>Env\xEDo Gratis</h3><p class="text-gray-600" data-v-7d96c123>En todos los pedidos superiores a $150.000 COP</p></div><div class="text-center" data-v-7d96c123><div class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4" data-v-7d96c123><i class="fas fa-medal text-2xl" data-v-7d96c123></i></div><h3 class="text-xl font-bold mb-2" data-v-7d96c123>Calidad Garantizada</h3><p class="text-gray-600" data-v-7d96c123>Los mejores materiales para tu rendimiento deportivo</p></div><div class="text-center" data-v-7d96c123><div class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4" data-v-7d96c123><i class="fas fa-undo text-2xl" data-v-7d96c123></i></div><h3 class="text-xl font-bold mb-2" data-v-7d96c123>Devoluciones Sencillas</h3><p class="text-gray-600" data-v-7d96c123>30 d\xEDas para cambios o devoluciones sin problemas</p></div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7d96c123"]]);

export { index as default };
//# sourceMappingURL=index-DuR-v5VA.mjs.map

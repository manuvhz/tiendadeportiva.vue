import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'file://C:/Users/varga/OneDrive/Documents/GitHub/tiendadeportiva.vue/node_modules/vue/server-renderer/index.mjs';
import { u as useState } from './state-CuouCpJu.mjs';
import { useSSRContext } from 'file://C:/Users/varga/OneDrive/Documents/GitHub/tiendadeportiva.vue/node_modules/vue/index.mjs';
import './server.mjs';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const productos = [
      {
        id: 1,
        nombre: "Camiseta deportiva transpirable",
        descripcion: "Camiseta de alto rendimiento para entrenamientos intensos",
        precioOriginal: 89e3,
        precio: 69900,
        descuento: 20,
        imagen: "https://via.placeholder.com/400x300?text=Camiseta+Deportiva"
      },
      {
        id: 2,
        nombre: "Leggings de compresi\xF3n",
        descripcion: "Leggings de compresi\xF3n para mayor rendimiento muscular",
        precioOriginal: 12e4,
        precio: 84e3,
        descuento: 30,
        imagen: "https://via.placeholder.com/400x300?text=Leggings"
      },
      {
        id: 3,
        nombre: "Zapatillas Running Pro",
        descripcion: "Zapatillas dise\xF1adas para corredores profesionales",
        precioOriginal: 25e4,
        precio: 225e3,
        descuento: 10,
        imagen: "https://via.placeholder.com/400x300?text=Zapatillas"
      },
      {
        id: 4,
        nombre: "Sudadera con capucha",
        descripcion: "Sudadera c\xF3moda y ligera para tus entrenamientos",
        precio: 75e3,
        imagen: "https://via.placeholder.com/400x300?text=Sudadera"
      }
    ];
    useState("carrito", () => []);
    const formatearPrecio = (precio) => {
      return precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="text-3xl font-bold text-center mb-8">Ropa Deportiva AuraSport</h1><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(productos, (producto) => {
        _push(`<div class="bg-white rounded-lg shadow-md overflow-hidden relative">`);
        if (producto.descuento) {
          _push(`<div class="absolute top-2 right-2 w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center font-bold z-10"> -${ssrInterpolate(producto.descuento)}% </div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<img${ssrRenderAttr("src", producto.imagen)}${ssrRenderAttr("alt", producto.nombre)} class="w-full h-64 object-cover"><div class="p-4"><h2 class="text-xl font-semibold mb-2">${ssrInterpolate(producto.nombre)}</h2><div class="flex items-center mb-4">`);
        if (producto.descuento) {
          _push(`<span class="line-through text-gray-500 mr-2"> $${ssrInterpolate(formatearPrecio(producto.precioOriginal))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="text-xl font-bold text-purple-700"> $${ssrInterpolate(formatearPrecio(producto.precio))}</span></div><p class="text-gray-600 mb-4">${ssrInterpolate(producto.descripcion)}</p><button class="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition"> Agregar al carrito </button></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Em2wEelS.mjs.map

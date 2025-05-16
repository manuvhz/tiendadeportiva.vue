import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import "./useToast-DCWUfaJv.js";
import { u as useState } from "./state-CuouCpJu.js";
import { useSSRContext } from "vue";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "C:/Users/varga/OneDrive/Documents/GitHub/tiendadeportiva.vue/node_modules/hookable/dist/index.mjs";
import "C:/Users/varga/OneDrive/Documents/GitHub/tiendadeportiva.vue/node_modules/unctx/dist/index.mjs";
import "C:/Users/varga/OneDrive/Documents/GitHub/tiendadeportiva.vue/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/varga/OneDrive/Documents/GitHub/tiendadeportiva.vue/node_modules/radix3/dist/index.mjs";
import "C:/Users/varga/OneDrive/Documents/GitHub/tiendadeportiva.vue/node_modules/defu/dist/defu.mjs";
import "C:/Users/varga/OneDrive/Documents/GitHub/tiendadeportiva.vue/node_modules/ufo/dist/index.mjs";
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
        nombre: "Leggings de compresión",
        descripcion: "Leggings de compresión para mayor rendimiento muscular",
        precioOriginal: 12e4,
        precio: 84e3,
        descuento: 30,
        imagen: "https://via.placeholder.com/400x300?text=Leggings"
      },
      {
        id: 3,
        nombre: "Zapatillas Running Pro",
        descripcion: "Zapatillas diseñadas para corredores profesionales",
        precioOriginal: 25e4,
        precio: 225e3,
        descuento: 10,
        imagen: "https://via.placeholder.com/400x300?text=Zapatillas"
      },
      {
        id: 4,
        nombre: "Sudadera con capucha",
        descripcion: "Sudadera cómoda y ligera para tus entrenamientos",
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
export {
  _sfc_main as default
};
//# sourceMappingURL=index-Em2wEelS.js.map

import { _ as __nuxt_component_0 } from "./nuxt-link-B3CPr-Ch.js";
import { unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import "./useToast-DCWUfaJv.js";
import { u as useState } from "./state-CuouCpJu.js";
import "C:/Users/varga/OneDrive/Documents/GitHub/tiendadeportiva.vue/node_modules/hookable/dist/index.mjs";
import "C:/Users/varga/OneDrive/Documents/GitHub/tiendadeportiva.vue/node_modules/ufo/dist/index.mjs";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "C:/Users/varga/OneDrive/Documents/GitHub/tiendadeportiva.vue/node_modules/unctx/dist/index.mjs";
import "C:/Users/varga/OneDrive/Documents/GitHub/tiendadeportiva.vue/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/varga/OneDrive/Documents/GitHub/tiendadeportiva.vue/node_modules/radix3/dist/index.mjs";
import "C:/Users/varga/OneDrive/Documents/GitHub/tiendadeportiva.vue/node_modules/defu/dist/defu.mjs";
const _sfc_main = {
  __name: "carrito",
  __ssrInlineRender: true,
  setup(__props) {
    const $carrito = useState("carrito", () => []);
    const calcularSubtotal = () => {
      return $carrito.value.reduce((total, item) => {
        return total + item.precio * item.cantidad;
      }, 0);
    };
    const calcularIVA = () => {
      return calcularSubtotal() * 0.19;
    };
    const calcularTotal = () => {
      return calcularSubtotal() + calcularIVA();
    };
    const formatearPrecio = (precio) => {
      return Math.round(precio).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="text-3xl font-bold text-center mb-8">Tu Carrito</h1>`);
      if (unref($carrito).length === 0) {
        _push(`<div class="text-center py-8"><p class="text-xl text-gray-600">Tu carrito está vacío</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "inline-block mt-4 bg-purple-600 text-white py-2 px-6 rounded hover:bg-purple-700"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Ver productos `);
            } else {
              return [
                createTextVNode(" Ver productos ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div><div class="bg-white rounded-lg shadow-md p-6 mb-6"><!--[-->`);
        ssrRenderList(unref($carrito), (item, index) => {
          _push(`<div class="flex flex-col md:flex-row items-center py-4 border-b last:border-b-0"><img${ssrRenderAttr("src", item.imagen)}${ssrRenderAttr("alt", item.nombre)} class="w-24 h-24 object-cover rounded mb-4 md:mb-0 md:mr-6"><div class="flex-1"><h3 class="text-lg font-semibold">${ssrInterpolate(item.nombre)}</h3><p class="text-gray-600">${ssrInterpolate(item.descripcion)}</p></div><div class="flex items-center mt-4 md:mt-0"><button class="bg-gray-200 text-gray-700 w-8 h-8 flex items-center justify-center rounded-l"> - </button><span class="bg-gray-100 text-gray-700 w-12 h-8 flex items-center justify-center">${ssrInterpolate(item.cantidad)}</span><button class="bg-gray-200 text-gray-700 w-8 h-8 flex items-center justify-center rounded-r"> + </button></div><div class="text-right ml-6"><p class="text-lg font-semibold text-purple-700"> $${ssrInterpolate(formatearPrecio(item.precio * item.cantidad))}</p><button class="text-red-500 text-sm hover:text-red-700"> Eliminar </button></div></div>`);
        });
        _push(`<!--]--></div><div class="bg-white rounded-lg shadow-md p-6"><div class="flex justify-between items-center mb-4"><span class="text-lg">Subtotal:</span><span class="text-lg font-semibold">$${ssrInterpolate(formatearPrecio(calcularSubtotal()))}</span></div><div class="flex justify-between items-center mb-4"><span class="text-lg">IVA (19%):</span><span class="text-lg font-semibold">$${ssrInterpolate(formatearPrecio(calcularIVA()))}</span></div><div class="flex justify-between items-center mb-6 border-t pt-4"><span class="text-xl font-bold">Total:</span><span class="text-xl font-bold text-purple-700">$${ssrInterpolate(formatearPrecio(calcularTotal()))}</span></div><button class="w-full bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition text-lg font-semibold"> Proceder al pago </button></div></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/carrito.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=carrito-Drjjzm9X.js.map

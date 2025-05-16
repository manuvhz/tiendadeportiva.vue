import { resolveComponent, useSSRContext } from 'file://C:/Users/varga/OneDrive/Documents/GitHub/tiendadeportiva.vue/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'file://C:/Users/varga/OneDrive/Documents/GitHub/tiendadeportiva.vue/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheHeader = resolveComponent("TheHeader");
  const _component_TheFooter = resolveComponent("TheFooter");
  const _component_cart_modal = resolveComponent("cart-modal");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_TheHeader, null, null, _parent));
  _push(`<main>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main>`);
  _push(ssrRenderComponent(_component_TheFooter, null, null, _parent));
  _push(ssrRenderComponent(_component_cart_modal, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-D7lhkj73.mjs.map

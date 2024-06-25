import { l as s } from "../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js";
import { Popconfirm as p } from "../node_modules/.pnpm/tdesign-vue-next@1.9.6_vue@3.4.30/node_modules/tdesign-vue-next/es/popconfirm/index.js";
import { Link as a } from "../node_modules/.pnpm/tdesign-vue-next@1.9.6_vue@3.4.30/node_modules/tdesign-vue-next/es/link/index.js";
const n = {
  attrs: { theme: "primary" },
  pop: { show: !1 }
}, i = (o) => {
  const t = [];
  for (let r = 0; r < o.length; r++) {
    const e = s.defaultsDeep(o[r], n);
    e.pop.show ? t.push(
      /* @__PURE__ */ React.createElement(p, { ...e.pop }, /* @__PURE__ */ React.createElement(a, { class: "base-operator-btn__item", hover: "color", ...e.attrs }, e.name || "-"))
    ) : t.push(
      /* @__PURE__ */ React.createElement(a, { class: "base-operator-btn__item", hover: "color", ...e.attrs }, e.name || "-")
    );
  }
  return /* @__PURE__ */ React.createElement("span", { class: "base-operator-btn" }, t);
};
export {
  i as default
};

import { defineComponent as f, resolveComponent as e, openBlock as r, createBlock as n, normalizeStyle as k, withCtx as o, createVNode as m, createElementBlock as h, Fragment as B, renderList as y, createTextVNode as c, toDisplayString as w, renderSlot as g, createCommentVNode as C } from "vue";
import { useRouter as I } from "../node_modules/.pnpm/vue-router@4.1.6_vue@3.4.30/node_modules/vue-router/dist/vue-router.js";
const $ = /* @__PURE__ */ f({
  __name: "BaseBreadcrumb",
  props: {
    list: {},
    isBack: { type: Boolean, default: !1 },
    maxItemWidth: { default: "150" },
    mb: { default: 20 }
  },
  setup(x) {
    const l = I(), s = () => {
      l.back();
    };
    return (t, N) => {
      const i = e("t-breadcrumbItem"), u = e("t-breadcrumb"), d = e("t-icon"), p = e("t-button"), _ = e("t-row");
      return r(), n(_, {
        align: "center",
        justify: "space-between",
        style: k({ marginBottom: `${t.mb}px` })
      }, {
        default: o(() => [
          m(u, { "max-item-width": t.maxItemWidth }, {
            default: o(() => [
              (r(!0), h(B, null, y(t.list, (a, b) => (r(), n(i, {
                key: `breadcrumbItem-${b}`,
                to: a.path
              }, {
                default: o(() => [
                  c(w(a.title), 1)
                ]),
                _: 2
              }, 1032, ["to"]))), 128))
            ]),
            _: 1
          }, 8, ["max-item-width"]),
          g(t.$slots, "right"),
          t.isBack ? (r(), n(p, {
            key: 0,
            theme: "primary",
            shape: "round",
            variant: "base",
            onClick: s
          }, {
            icon: o(() => [
              m(d, { name: "rollback" })
            ]),
            default: o(() => [
              c(" 返回 ")
            ]),
            _: 1
          })) : C("", !0)
        ]),
        _: 3
      }, 8, ["style"]);
    };
  }
});
export {
  $ as default
};

import { defineComponent as f, resolveComponent as t, openBlock as r, createBlock as n, normalizeStyle as B, withCtx as o, createVNode as m, createElementBlock as h, Fragment as k, renderList as y, createTextVNode as c, toDisplayString as w, renderSlot as g, createCommentVNode as C } from "vue";
import { useRouter as I } from "vue-router";
const $ = /* @__PURE__ */ f({
  inheritAttrs: !1,
  name: "ABaseBreadcrumb",
  __name: "BaseBreadcrumb",
  props: {
    list: {},
    isBack: { type: Boolean, default: !1 },
    maxItemWidth: { default: "150" },
    mb: { default: 20 }
  },
  setup(x) {
    const s = I(), l = () => {
      s.back();
    };
    return (e, N) => {
      const i = t("t-breadcrumbItem"), u = t("t-breadcrumb"), d = t("t-icon"), p = t("t-button"), _ = t("t-row");
      return r(), n(_, {
        align: "center",
        justify: "space-between",
        style: B({ marginBottom: `${e.mb}px` })
      }, {
        default: o(() => [
          m(u, { "max-item-width": e.maxItemWidth }, {
            default: o(() => [
              (r(!0), h(k, null, y(e.list, (a, b) => (r(), n(i, {
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
          g(e.$slots, "right"),
          e.isBack ? (r(), n(p, {
            key: 0,
            theme: "primary",
            shape: "round",
            variant: "base",
            onClick: l
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

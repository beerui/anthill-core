import { defineComponent as k, resolveComponent as t, openBlock as r, createBlock as n, normalizeStyle as B, withCtx as e, createVNode as c, createElementBlock as y, Fragment as x, renderList as w, createTextVNode as m, toDisplayString as g, renderSlot as C, createCommentVNode as I } from "vue";
import { useRouter as N } from "vue-router";
const v = /* @__PURE__ */ k({
  inheritAttrs: !1,
  name: "ABaseBreadcrumb",
  __name: "BaseBreadcrumb",
  setup(s) {
    const i = N(), l = () => {
      i.back();
    }, o = s;
    return (u, S) => {
      const _ = t("t-breadcrumbItem"), d = t("t-breadcrumb"), p = t("t-icon"), b = t("t-button"), f = t("t-row");
      return r(), n(f, {
        align: "center",
        justify: "space-between",
        style: B({ marginBottom: `${o.mb}px` })
      }, {
        default: e(() => [
          c(d, {
            "max-item-width": o.maxItemWidth
          }, {
            default: e(() => [
              (r(!0), y(x, null, w(o.list, (a, h) => (r(), n(_, {
                key: `breadcrumbItem-${h}`,
                to: a.path
              }, {
                default: e(() => [
                  m(g(a.title), 1)
                ]),
                _: 2
              }, 1032, ["to"]))), 128))
            ]),
            _: 1
          }, 8, ["max-item-width"]),
          C(u.$slots, "right"),
          o.isBack ? (r(), n(b, {
            key: 0,
            theme: "primary",
            shape: "round",
            variant: "base",
            onClick: l
          }, {
            icon: e(() => [
              c(p, { name: "rollback" })
            ]),
            default: e(() => [
              m(" 返回 ")
            ]),
            _: 1
          })) : I("", !0)
        ]),
        _: 3
      }, 8, ["style"]);
    };
  }
});
export {
  v as default
};

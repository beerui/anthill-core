import { defineComponent as B, resolveComponent as t, openBlock as r, createBlock as n, normalizeStyle as h, withCtx as e, createVNode as c, createElementBlock as y, Fragment as x, renderList as w, createTextVNode as m, toDisplayString as g, renderSlot as C, createCommentVNode as I } from "vue";
import { useRouter as N } from "vue-router";
const v = /* @__PURE__ */ B({
  name: "ABaseBreadcrumb",
  __name: "BaseBreadcrumb",
  setup(s) {
    const i = N(), u = () => {
      i.back();
    }, o = s;
    return (l, S) => {
      const _ = t("t-breadcrumbItem"), d = t("t-breadcrumb"), p = t("t-icon"), b = t("t-button"), f = t("t-row");
      return r(), n(f, {
        align: "center",
        justify: "space-between",
        style: h({ marginBottom: `${o.mb}px` })
      }, {
        default: e(() => [
          c(d, {
            "max-item-width": o.maxItemWidth
          }, {
            default: e(() => [
              (r(!0), y(x, null, w(o.list, (a, k) => (r(), n(_, {
                key: `breadcrumbItem-${k}`,
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
          C(l.$slots, "right"),
          o.isBack ? (r(), n(b, {
            key: 0,
            theme: "primary",
            shape: "round",
            variant: "base",
            onClick: u
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

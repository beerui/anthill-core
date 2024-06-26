import { defineComponent as C, resolveComponent as r, openBlock as s, createBlock as c, withCtx as t, createVNode as a, createElementBlock as b, Fragment as k, renderList as w, renderSlot as f, createCommentVNode as y, mergeProps as $, normalizeStyle as U, createTextVNode as h } from "vue";
import x from "./BaseFormItem.vue.js";
const N = {
  key: 0,
  class: "base-search-operator"
}, L = /* @__PURE__ */ C({
  inheritAttrs: !1,
  name: "ABaseSearchBar",
  __name: "BaseSearchBar",
  emits: ["reset", "submit"],
  setup(V, { emit: g }) {
    const n = V, p = g, i = (u, o) => {
      o.trigger === "immediately" && p("submit");
    };
    return (u, o) => {
      const v = r("t-form-item"), d = r("t-col"), _ = r("t-row"), m = r("t-button"), B = r("t-form");
      return s(), c(B, {
        "label-width": 80,
        colon: "",
        onReset: o[0] || (o[0] = (e) => p("reset")),
        onSubmit: o[1] || (o[1] = (e) => p("submit"))
      }, {
        default: t(() => [
          a(_, { gutter: [24, 24] }, {
            default: t(() => [
              a(d, {
                span: 12 - n.btnSpan
              }, {
                default: t(() => [
                  a(_, { gutter: [24, 24] }, {
                    default: t(() => [
                      (s(!0), b(k, null, w(n.config, (e, S) => (s(), c(d, {
                        key: S,
                        span: e.span || 4
                      }, {
                        default: t(() => [
                          e.type === "SLOT" ? (s(), c(v, {
                            key: 0,
                            label: e == null ? void 0 : e.label,
                            "label-width": e == null ? void 0 : e.labelWidth,
                            name: e == null ? void 0 : e.name
                          }, {
                            default: t(() => [
                              f(u.$slots, e.name, { data: e }, void 0, !0)
                            ]),
                            _: 2
                          }, 1032, ["label", "label-width", "name"])) : y("", !0),
                          a(x, $({ ref_for: !0 }, e.attrs, {
                            modelValue: e.value,
                            "onUpdate:modelValue": (l) => e.value = l,
                            typeValue: e.typeValue,
                            "onUpdate:typeValue": (l) => e.typeValue = l,
                            config: e,
                            onChange: (l) => i(l, e)
                          }), null, 16, ["modelValue", "onUpdate:modelValue", "typeValue", "onUpdate:typeValue", "config", "onChange"])
                        ]),
                        _: 2
                      }, 1032, ["span"]))), 128))
                    ]),
                    _: 3
                  })
                ]),
                _: 3
              }, 8, ["span"]),
              a(d, {
                span: n.btnSpan,
                class: "text-right",
                style: U(n.btnBoxStyle)
              }, {
                default: t(() => [
                  f(u.$slots, "btnPre", {}, void 0, !0),
                  n.hasBtn ? (s(), b("div", N, [
                    a(m, {
                      type: "submit",
                      theme: "primary"
                    }, {
                      default: t(() => [
                        h("查询")
                      ]),
                      _: 1
                    }),
                    a(m, {
                      class: "ml-15",
                      type: "reset",
                      variant: "base",
                      theme: "default"
                    }, {
                      default: t(() => [
                        h("重置")
                      ]),
                      _: 1
                    })
                  ])) : y("", !0),
                  f(u.$slots, "default", {}, void 0, !0)
                ]),
                _: 3
              }, 8, ["span", "style"])
            ]),
            _: 3
          })
        ]),
        _: 3
      });
    };
  }
});
export {
  L as default
};

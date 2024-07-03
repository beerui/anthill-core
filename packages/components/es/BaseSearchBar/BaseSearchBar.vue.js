import { defineComponent as C, resolveComponent as r, openBlock as s, createBlock as c, withCtx as t, createVNode as a, createElementBlock as b, Fragment as k, renderList as w, renderSlot as _, createCommentVNode as y, mergeProps as $, normalizeStyle as U, createTextVNode as V } from "vue";
import x from "./BaseFormItem.vue.js";
const N = {
  key: 0,
  class: "base-search-operator"
}, T = /* @__PURE__ */ C({
  name: "ABaseSearchBar",
  __name: "BaseSearchBar",
  emits: ["reset", "submit"],
  setup(g, { emit: h }) {
    const o = g, p = h, i = (u, n) => {
      n.trigger === "immediately" && p("submit");
    };
    return (u, n) => {
      const B = r("t-form-item"), d = r("t-col"), f = r("t-row"), m = r("t-button"), S = r("t-form");
      return s(), c(S, {
        "label-width": 80,
        colon: "",
        onReset: n[0] || (n[0] = (e) => p("reset")),
        onSubmit: n[1] || (n[1] = (e) => p("submit"))
      }, {
        default: t(() => [
          a(f, { gutter: [24, 24] }, {
            default: t(() => [
              a(d, {
                span: 12 - o.btnSpan
              }, {
                default: t(() => [
                  a(f, { gutter: [24, 24] }, {
                    default: t(() => [
                      (s(!0), b(k, null, w(o.config, (e, v) => (s(), c(d, {
                        key: v,
                        span: e.span || 4
                      }, {
                        default: t(() => [
                          e.type === "SLOT" ? (s(), c(B, {
                            key: 0,
                            label: e == null ? void 0 : e.label,
                            "label-width": e == null ? void 0 : e.labelWidth,
                            name: e == null ? void 0 : e.name
                          }, {
                            default: t(() => [
                              _(u.$slots, e.name, { data: e })
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
                span: o.btnSpan,
                class: "text-right",
                style: U(o.btnBoxStyle)
              }, {
                default: t(() => [
                  _(u.$slots, "btnPre"),
                  o.hasBtn ? (s(), b("div", N, [
                    a(m, {
                      type: "submit",
                      theme: "primary"
                    }, {
                      default: t(() => [
                        V("查询")
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
                        V("重置")
                      ]),
                      _: 1
                    })
                  ])) : y("", !0),
                  _(u.$slots, "default")
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
  T as default
};

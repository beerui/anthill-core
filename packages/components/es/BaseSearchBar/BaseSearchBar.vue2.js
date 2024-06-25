import { defineComponent as v, resolveComponent as r, openBlock as s, createBlock as d, withCtx as a, createVNode as o, createElementBlock as c, Fragment as S, renderList as C, renderSlot as f, createCommentVNode as b, mergeProps as k, normalizeStyle as w, createTextVNode as y } from "vue";
import $ from "./BaseFormItem.vue.js";
const U = {
  key: 0,
  class: "base-search-operator"
}, L = /* @__PURE__ */ v({
  inheritAttrs: !1,
  name: "ABaseSearchBar",
  __name: "BaseSearchBar",
  props: {
    config: {},
    hasBtn: { type: Boolean, default: !0 },
    btnBoxStyle: {},
    btnSpan: { default: 2 }
  },
  emits: ["reset", "submit"],
  setup(N, { emit: h }) {
    const u = h, g = (t, n) => {
      n.trigger === "immediately" && u("submit");
    };
    return (t, n) => {
      const i = r("t-form-item"), p = r("t-col"), m = r("t-row"), _ = r("t-button"), V = r("t-form");
      return s(), d(V, {
        "label-width": 80,
        colon: "",
        onReset: n[0] || (n[0] = (e) => u("reset")),
        onSubmit: n[1] || (n[1] = (e) => u("submit"))
      }, {
        default: a(() => [
          o(m, { gutter: [24, 24] }, {
            default: a(() => [
              o(p, {
                span: 12 - t.btnSpan
              }, {
                default: a(() => [
                  o(m, { gutter: [24, 24] }, {
                    default: a(() => [
                      (s(!0), c(S, null, C(t.config, (e, B) => (s(), d(p, {
                        key: B,
                        span: e.span || 4
                      }, {
                        default: a(() => [
                          e.type === "SLOT" ? (s(), d(i, {
                            key: 0,
                            label: e == null ? void 0 : e.label,
                            "label-width": e == null ? void 0 : e.labelWidth,
                            name: e == null ? void 0 : e.name
                          }, {
                            default: a(() => [
                              f(t.$slots, e.name, { data: e }, void 0, !0)
                            ]),
                            _: 2
                          }, 1032, ["label", "label-width", "name"])) : b("", !0),
                          o($, k({ ref_for: !0 }, e.attrs, {
                            modelValue: e.value,
                            "onUpdate:modelValue": (l) => e.value = l,
                            typeValue: e.typeValue,
                            "onUpdate:typeValue": (l) => e.typeValue = l,
                            config: e,
                            onChange: (l) => g(l, e)
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
              o(p, {
                span: t.btnSpan,
                class: "text-right",
                style: w(t.btnBoxStyle)
              }, {
                default: a(() => [
                  f(t.$slots, "btnPre", {}, void 0, !0),
                  t.hasBtn ? (s(), c("div", U, [
                    o(_, {
                      type: "submit",
                      theme: "primary"
                    }, {
                      default: a(() => [
                        y("查询")
                      ]),
                      _: 1
                    }),
                    o(_, {
                      class: "ml-15",
                      type: "reset",
                      variant: "base",
                      theme: "default"
                    }, {
                      default: a(() => [
                        y("重置")
                      ]),
                      _: 1
                    })
                  ])) : b("", !0),
                  f(t.$slots, "default", {}, void 0, !0)
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

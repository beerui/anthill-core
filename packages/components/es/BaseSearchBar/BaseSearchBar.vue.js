import { defineComponent as v, resolveComponent as u, openBlock as n, createBlock as d, withCtx as a, createVNode as l, createElementBlock as h, Fragment as k, renderList as A, renderSlot as c, createCommentVNode as m, mergeProps as $, normalizeStyle as g, createTextVNode as y } from "vue";
import C from "./BaseFormItem.vue.js";
const P = {
  key: 0,
  class: "base-search-operator"
}, w = {
  key: 0,
  class: "base-search-operator"
}, F = /* @__PURE__ */ v({
  name: "ABaseSearchBar",
  __name: "BaseSearchBar",
  props: ["hiddenBtn", "btnSpan", "btnBoxStyle", "config", "projectTheme"],
  emits: ["reset", "submit"],
  setup(t, { emit: V }) {
    const b = V, _ = (o, r) => {
      r.trigger === "immediately" && b("submit");
    };
    return (o, r) => {
      const B = u("t-form-item"), f = u("t-col"), p = u("t-button"), i = u("t-row"), S = u("t-form");
      return n(), d(S, {
        "label-width": 80,
        colon: "",
        onReset: r[0] || (r[0] = (e) => b("reset")),
        onSubmit: r[1] || (r[1] = (e) => b("submit"))
      }, {
        default: a(() => [
          l(i, { gutter: [24, 24] }, {
            default: a(() => [
              l(f, {
                span: t.projectTheme === "AI_PLATFORM" ? 12 : 12 - (t.btnSpan || 2)
              }, {
                default: a(() => [
                  l(i, { gutter: [24, 24] }, {
                    default: a(() => [
                      (n(!0), h(k, null, A(t.config || [], (e, T) => (n(), d(f, {
                        key: T,
                        span: t.projectTheme === "AI_PLATFORM" ? e.span || 3 : e.span || 4
                      }, {
                        default: a(() => [
                          e.type === "SLOT" ? (n(), d(B, {
                            key: 0,
                            label: e == null ? void 0 : e.label,
                            "label-width": e == null ? void 0 : e.labelWidth,
                            name: e == null ? void 0 : e.name
                          }, {
                            default: a(() => [
                              c(o.$slots, e.name, { data: e })
                            ]),
                            _: 2
                          }, 1032, ["label", "label-width", "name"])) : m("", !0),
                          l(C, $({ ref_for: !0 }, e.attrs, {
                            modelValue: e.value,
                            "onUpdate:modelValue": (s) => e.value = s,
                            typeValue: e.typeValue,
                            "onUpdate:typeValue": (s) => e.typeValue = s,
                            config: e,
                            onChange: (s) => _(s, e)
                          }), null, 16, ["modelValue", "onUpdate:modelValue", "typeValue", "onUpdate:typeValue", "config", "onChange"])
                        ]),
                        _: 2
                      }, 1032, ["span"]))), 128)),
                      t.projectTheme === "AI_PLATFORM" ? (n(), d(f, {
                        key: 0,
                        span: t.btnSpan || 3,
                        class: "theme-search-end text-right",
                        style: g(t.btnBoxStyle || null)
                      }, {
                        default: a(() => [
                          c(o.$slots, "btnPre"),
                          t.hiddenBtn ? m("", !0) : (n(), h("div", P, [
                            l(p, {
                              type: "reset",
                              variant: "outline",
                              theme: "primary"
                            }, {
                              default: a(() => [
                                y("重置")
                              ]),
                              _: 1
                            }),
                            l(p, {
                              class: "ml-15",
                              type: "submit",
                              theme: "primary"
                            }, {
                              default: a(() => [
                                y("查询")
                              ]),
                              _: 1
                            })
                          ])),
                          c(o.$slots, "default")
                        ]),
                        _: 3
                      }, 8, ["span", "style"])) : m("", !0)
                    ]),
                    _: 3
                  })
                ]),
                _: 3
              }, 8, ["span"]),
              t.projectTheme !== "AI_PLATFORM" ? (n(), d(f, {
                key: 0,
                span: t.btnSpan || 2,
                class: "text-right",
                style: g(t.btnBoxStyle || null)
              }, {
                default: a(() => [
                  c(o.$slots, "btnPre"),
                  t.hiddenBtn ? m("", !0) : (n(), h("div", w, [
                    l(p, {
                      type: "submit",
                      theme: "primary"
                    }, {
                      default: a(() => [
                        y("查询")
                      ]),
                      _: 1
                    }),
                    l(p, {
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
                  ])),
                  c(o.$slots, "default")
                ]),
                _: 3
              }, 8, ["span", "style"])) : m("", !0)
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
  F as default
};

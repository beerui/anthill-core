import { defineComponent as v, resolveComponent as r, openBlock as s, createBlock as c, withCtx as t, createVNode as n, createElementBlock as _, Fragment as C, renderList as k, renderSlot as f, createCommentVNode as y, mergeProps as w, normalizeStyle as $, createTextVNode as g } from "vue";
import x from "./BaseFormItem.vue.js";
const U = {
  key: 0,
  class: "base-search-operator"
}, P = /* @__PURE__ */ v({
  name: "ABaseSearchBar",
  __name: "BaseSearchBar",
  props: ["hiddenBtn", "btnSpan", "btnBoxStyle", "config"],
  emits: ["reset", "submit"],
  setup(o, { emit: h }) {
    const d = h, V = (u, a) => {
      a.trigger === "immediately" && d("submit");
    };
    return (u, a) => {
      const i = r("t-form-item"), p = r("t-col"), m = r("t-row"), b = r("t-button"), B = r("t-form");
      return s(), c(B, {
        "label-width": 80,
        colon: "",
        onReset: a[0] || (a[0] = (e) => d("reset")),
        onSubmit: a[1] || (a[1] = (e) => d("submit"))
      }, {
        default: t(() => [
          n(m, { gutter: [24, 24] }, {
            default: t(() => [
              n(p, {
                span: 12 - (o.btnSpan || 2)
              }, {
                default: t(() => [
                  n(m, { gutter: [24, 24] }, {
                    default: t(() => [
                      (s(!0), _(C, null, k(o.config || [], (e, S) => (s(), c(p, {
                        key: S,
                        span: e.span || 4
                      }, {
                        default: t(() => [
                          e.type === "SLOT" ? (s(), c(i, {
                            key: 0,
                            label: e == null ? void 0 : e.label,
                            "label-width": e == null ? void 0 : e.labelWidth,
                            name: e == null ? void 0 : e.name
                          }, {
                            default: t(() => [
                              f(u.$slots, e.name, { data: e })
                            ]),
                            _: 2
                          }, 1032, ["label", "label-width", "name"])) : y("", !0),
                          n(x, w({ ref_for: !0 }, e.attrs, {
                            modelValue: e.value,
                            "onUpdate:modelValue": (l) => e.value = l,
                            typeValue: e.typeValue,
                            "onUpdate:typeValue": (l) => e.typeValue = l,
                            config: e,
                            onChange: (l) => V(l, e)
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
              n(p, {
                span: o.btnSpan || 2,
                class: "text-right",
                style: $(o.btnBoxStyle || null)
              }, {
                default: t(() => [
                  f(u.$slots, "btnPre"),
                  o.hiddenBtn ? y("", !0) : (s(), _("div", U, [
                    n(b, {
                      type: "submit",
                      theme: "primary"
                    }, {
                      default: t(() => [
                        g("查询")
                      ]),
                      _: 1
                    }),
                    n(b, {
                      class: "ml-15",
                      type: "reset",
                      variant: "base",
                      theme: "default"
                    }, {
                      default: t(() => [
                        g("重置")
                      ]),
                      _: 1
                    })
                  ])),
                  f(u.$slots, "default")
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
  P as default
};

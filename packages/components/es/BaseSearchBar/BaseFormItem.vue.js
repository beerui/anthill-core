import { defineComponent as te, computed as g, resolveComponent as u, openBlock as i, createBlock as m, withCtx as n, createVNode as t, mergeProps as p, normalizeStyle as M, createSlots as de, createTextVNode as ue, toDisplayString as ie, createCommentVNode as me } from "vue";
const pe = {
  inheritAttrs: !1
}, fe = /* @__PURE__ */ te({
  ...pe,
  __name: "BaseFormItem",
  props: {
    modelValue: {},
    typeValue: {},
    config: {}
  },
  emits: ["update:modelValue", "update:typeValue", "change"],
  setup(Q, { emit: Z }) {
    const s = Q, f = Z, o = g({
      get() {
        return s == null ? void 0 : s.modelValue;
      },
      set(e) {
        f("update:modelValue", e), f("change", e);
      }
    }), r = g({
      get() {
        return s == null ? void 0 : s.typeValue;
      },
      set(e) {
        f("update:typeValue", e), f("update:modelValue", "");
      }
    }), _ = g(() => {
      const e = s.config.attrs.options.find((l) => l.value === s.typeValue);
      return e == null ? void 0 : e.children;
    }), y = g(() => {
      const e = s.config.attrs.options;
      return e ? e.map((l) => ({ value: l.value, label: l.label })) : [];
    });
    return (e, l) => {
      var k, h, E, U, c, C, T, w, $, S, A, P, I, N, R, D, B, L, K, O, Y, z, F, G, H, X, j, q, J;
      const v = u("t-input"), d = u("t-form-item"), b = u("t-select"), x = u("t-date-picker"), ee = u("t-date-range-picker"), le = u("t-cascader"), ae = u("t-radio-group"), oe = u("t-checkbox-group"), ne = u("t-tree-select"), W = u("t-input-adornment");
      return e.config.type === "INPUT" ? (i(), m(d, {
        key: 0,
        label: (k = e.config) == null ? void 0 : k.label,
        labelWidth: (h = e.config) == null ? void 0 : h.labelWidth,
        name: (E = e.config) == null ? void 0 : E.name
      }, {
        default: n(() => [
          t(v, p({
            modelValue: o.value,
            "onUpdate:modelValue": l[0] || (l[0] = (a) => o.value = a)
          }, e.$attrs), null, 16, ["modelValue"])
        ]),
        _: 1
      }, 8, ["label", "labelWidth", "name"])) : e.config.type === "SELECT" ? (i(), m(d, {
        key: 1,
        label: (U = e.config) == null ? void 0 : U.label,
        labelWidth: (c = e.config) == null ? void 0 : c.labelWidth,
        name: (C = e.config) == null ? void 0 : C.name
      }, {
        default: n(() => [
          t(b, p({
            modelValue: o.value,
            "onUpdate:modelValue": l[1] || (l[1] = (a) => o.value = a)
          }, e.$attrs), null, 16, ["modelValue"])
        ]),
        _: 1
      }, 8, ["label", "labelWidth", "name"])) : e.config.type === "DATE_PICKER" ? (i(), m(d, {
        key: 2,
        label: (T = e.config) == null ? void 0 : T.label,
        labelWidth: (w = e.config) == null ? void 0 : w.labelWidth,
        name: ($ = e.config) == null ? void 0 : $.name
      }, {
        default: n(() => [
          t(x, p({
            modelValue: o.value,
            "onUpdate:modelValue": l[2] || (l[2] = (a) => o.value = a)
          }, e.$attrs, { class: "base-date-picker" }), null, 16, ["modelValue"])
        ]),
        _: 1
      }, 8, ["label", "labelWidth", "name"])) : e.config.type === "DATE_RANGE_PICKER" ? (i(), m(d, {
        key: 3,
        label: (S = e.config) == null ? void 0 : S.label,
        labelWidth: (A = e.config) == null ? void 0 : A.labelWidth,
        name: (P = e.config) == null ? void 0 : P.name
      }, {
        default: n(() => [
          t(ee, p({
            modelValue: o.value,
            "onUpdate:modelValue": l[3] || (l[3] = (a) => o.value = a)
          }, e.$attrs), null, 16, ["modelValue"])
        ]),
        _: 1
      }, 8, ["label", "labelWidth", "name"])) : e.config.type === "CASCADER" ? (i(), m(d, {
        key: 4,
        label: (I = e.config) == null ? void 0 : I.label,
        labelWidth: (N = e.config) == null ? void 0 : N.labelWidth,
        name: (R = e.config) == null ? void 0 : R.name
      }, {
        default: n(() => [
          t(le, p({
            modelValue: o.value,
            "onUpdate:modelValue": l[4] || (l[4] = (a) => o.value = a)
          }, e.$attrs), null, 16, ["modelValue"])
        ]),
        _: 1
      }, 8, ["label", "labelWidth", "name"])) : e.config.type === "RADIO" ? (i(), m(d, {
        key: 5,
        label: (D = e.config) == null ? void 0 : D.label,
        labelWidth: (B = e.config) == null ? void 0 : B.labelWidth,
        name: (L = e.config) == null ? void 0 : L.name
      }, {
        default: n(() => [
          t(ae, p({
            modelValue: o.value,
            "onUpdate:modelValue": l[5] || (l[5] = (a) => o.value = a)
          }, e.$attrs), null, 16, ["modelValue"])
        ]),
        _: 1
      }, 8, ["label", "labelWidth", "name"])) : e.config.type === "CHECKBOX" ? (i(), m(d, {
        key: 6,
        label: (K = e.config) == null ? void 0 : K.label,
        labelWidth: (O = e.config) == null ? void 0 : O.labelWidth,
        name: (Y = e.config) == null ? void 0 : Y.name
      }, {
        default: n(() => [
          t(oe, p({
            modelValue: o.value,
            "onUpdate:modelValue": l[6] || (l[6] = (a) => o.value = a)
          }, e.$attrs), null, 16, ["modelValue"])
        ]),
        _: 1
      }, 8, ["label", "labelWidth", "name"])) : e.config.type === "TREE_SELECT" ? (i(), m(d, {
        key: 7,
        label: (z = e.config) == null ? void 0 : z.label,
        labelWidth: (F = e.config) == null ? void 0 : F.labelWidth,
        name: (G = e.config) == null ? void 0 : G.name
      }, {
        default: n(() => [
          t(ne, p({
            modelValue: o.value,
            "onUpdate:modelValue": l[7] || (l[7] = (a) => o.value = a)
          }, e.$attrs), null, 16, ["modelValue"])
        ]),
        _: 1
      }, 8, ["label", "labelWidth", "name"])) : e.config.type === "TYPE_SELECT" ? (i(), m(d, {
        key: 8,
        "label-width": e.config.showLabel ? null : 0,
        name: (H = e.config) == null ? void 0 : H.name,
        label: (X = e.config) == null ? void 0 : X.label
      }, {
        default: n(() => [
          t(W, null, {
            prepend: n(() => [
              t(b, {
                modelValue: r.value,
                "onUpdate:modelValue": l[9] || (l[9] = (a) => r.value = a),
                class: "type-select",
                options: y.value,
                style: M({ width: e.config.typeWidth })
              }, null, 8, ["modelValue", "options", "style"])
            ]),
            default: n(() => [
              t(b, p({
                modelValue: o.value,
                "onUpdate:modelValue": l[8] || (l[8] = (a) => o.value = a)
              }, e.$attrs, { options: _.value }), null, 16, ["modelValue", "options"])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["label-width", "name", "label"])) : e.config.type === "TYPE_INPUT" ? (i(), m(d, {
        key: 9,
        label: (j = e.config) == null ? void 0 : j.label,
        "label-width": (q = e.config) == null ? void 0 : q.labelWidth,
        name: (J = e.config) == null ? void 0 : J.name,
        class: "w-full"
      }, {
        default: n(() => {
          var a;
          return [
            t(W, { class: "w-full" }, de({
              prepend: n(() => [
                t(b, {
                  modelValue: r.value,
                  "onUpdate:modelValue": l[11] || (l[11] = (V) => r.value = V),
                  class: "type-select",
                  options: y.value,
                  style: M({ width: e.config.typeWidth })
                }, null, 8, ["modelValue", "options", "style"])
              ]),
              default: n(() => [
                t(v, p({
                  modelValue: o.value,
                  "onUpdate:modelValue": l[10] || (l[10] = (V) => o.value = V)
                }, e.$attrs), null, 16, ["modelValue"])
              ]),
              _: 2
            }, [
              (a = e.config) != null && a.appendShow ? {
                name: "append",
                fn: n(() => [
                  ue(ie(e.config.appendText || ""), 1)
                ]),
                key: "0"
              } : void 0
            ]), 1024)
          ];
        }),
        _: 1
      }, 8, ["label", "label-width", "name"])) : me("", !0);
    };
  }
});
export {
  fe as default
};

import { defineComponent as oe, computed as s, resolveComponent as i, openBlock as m, createBlock as f, withCtx as o, createVNode as d, mergeProps as b, normalizeStyle as Z, createSlots as de, createTextVNode as ue, toDisplayString as ie, createCommentVNode as me } from "vue";
const fe = {
  inheritAttrs: !1
}, ge = /* @__PURE__ */ oe({
  ...fe,
  __name: "BaseFormItem",
  props: ["config"],
  emits: ["update:modelValue", "update:typeValue", "change"],
  setup(e, { emit: p }) {
    const g = e, c = p, n = s({
      get() {
        return g == null ? void 0 : g.modelValue;
      },
      set(a) {
        c("update:modelValue", a), c("change", a);
      }
    }), V = s({
      get() {
        return g == null ? void 0 : g.typeValue;
      },
      set(a) {
        c("update:typeValue", a), c("update:modelValue", "");
      }
    }), x = s(() => {
      const a = g.config.attrs.options.find((l) => l.value === g.typeValue);
      return a == null ? void 0 : a.children;
    }), W = s(() => {
      const a = g.config.attrs.options;
      return a ? a.map((l) => ({ value: l.value, label: l.label })) : [];
    });
    return (a, l) => {
      var h, E, U, C, T, w, $, S, A, P, I, N, R, D, B, L, K, O, Y, z, F, G, H, X, j, q, J, M, Q;
      const r = i("t-input"), u = i("t-form-item"), y = i("t-select"), _ = i("t-date-picker"), ee = i("t-date-range-picker"), le = i("t-cascader"), ae = i("t-radio-group"), te = i("t-checkbox-group"), ne = i("t-tree-select"), k = i("t-input-adornment");
      return e.config.type === "INPUT" ? (m(), f(u, {
        key: 0,
        label: (h = e.config) == null ? void 0 : h.label,
        labelWidth: (E = e.config) == null ? void 0 : E.labelWidth,
        name: (U = e.config) == null ? void 0 : U.name
      }, {
        default: o(() => [
          d(r, b({
            modelValue: n.value,
            "onUpdate:modelValue": l[0] || (l[0] = (t) => n.value = t)
          }, a.$attrs), null, 16, ["modelValue"])
        ]),
        _: 1
      }, 8, ["label", "labelWidth", "name"])) : e.config.type === "SELECT" ? (m(), f(u, {
        key: 1,
        label: (C = e.config) == null ? void 0 : C.label,
        labelWidth: (T = e.config) == null ? void 0 : T.labelWidth,
        name: (w = e.config) == null ? void 0 : w.name
      }, {
        default: o(() => [
          d(y, b({
            modelValue: n.value,
            "onUpdate:modelValue": l[1] || (l[1] = (t) => n.value = t)
          }, a.$attrs), null, 16, ["modelValue"])
        ]),
        _: 1
      }, 8, ["label", "labelWidth", "name"])) : e.config.type === "DATE_PICKER" ? (m(), f(u, {
        key: 2,
        label: ($ = e.config) == null ? void 0 : $.label,
        labelWidth: (S = e.config) == null ? void 0 : S.labelWidth,
        name: (A = e.config) == null ? void 0 : A.name
      }, {
        default: o(() => [
          d(_, b({
            modelValue: n.value,
            "onUpdate:modelValue": l[2] || (l[2] = (t) => n.value = t)
          }, a.$attrs, { class: "base-date-picker" }), null, 16, ["modelValue"])
        ]),
        _: 1
      }, 8, ["label", "labelWidth", "name"])) : e.config.type === "DATE_RANGE_PICKER" ? (m(), f(u, {
        key: 3,
        label: (P = e.config) == null ? void 0 : P.label,
        labelWidth: (I = e.config) == null ? void 0 : I.labelWidth,
        name: (N = e.config) == null ? void 0 : N.name
      }, {
        default: o(() => [
          d(ee, b({
            modelValue: n.value,
            "onUpdate:modelValue": l[3] || (l[3] = (t) => n.value = t)
          }, a.$attrs), null, 16, ["modelValue"])
        ]),
        _: 1
      }, 8, ["label", "labelWidth", "name"])) : e.config.type === "CASCADER" ? (m(), f(u, {
        key: 4,
        label: (R = e.config) == null ? void 0 : R.label,
        labelWidth: (D = e.config) == null ? void 0 : D.labelWidth,
        name: (B = e.config) == null ? void 0 : B.name
      }, {
        default: o(() => [
          d(le, b({
            modelValue: n.value,
            "onUpdate:modelValue": l[4] || (l[4] = (t) => n.value = t)
          }, a.$attrs), null, 16, ["modelValue"])
        ]),
        _: 1
      }, 8, ["label", "labelWidth", "name"])) : e.config.type === "RADIO" ? (m(), f(u, {
        key: 5,
        label: (L = e.config) == null ? void 0 : L.label,
        labelWidth: (K = e.config) == null ? void 0 : K.labelWidth,
        name: (O = e.config) == null ? void 0 : O.name
      }, {
        default: o(() => [
          d(ae, b({
            modelValue: n.value,
            "onUpdate:modelValue": l[5] || (l[5] = (t) => n.value = t)
          }, a.$attrs), null, 16, ["modelValue"])
        ]),
        _: 1
      }, 8, ["label", "labelWidth", "name"])) : e.config.type === "CHECKBOX" ? (m(), f(u, {
        key: 6,
        label: (Y = e.config) == null ? void 0 : Y.label,
        labelWidth: (z = e.config) == null ? void 0 : z.labelWidth,
        name: (F = e.config) == null ? void 0 : F.name
      }, {
        default: o(() => [
          d(te, b({
            modelValue: n.value,
            "onUpdate:modelValue": l[6] || (l[6] = (t) => n.value = t)
          }, a.$attrs), null, 16, ["modelValue"])
        ]),
        _: 1
      }, 8, ["label", "labelWidth", "name"])) : e.config.type === "TREE_SELECT" ? (m(), f(u, {
        key: 7,
        label: (G = e.config) == null ? void 0 : G.label,
        labelWidth: (H = e.config) == null ? void 0 : H.labelWidth,
        name: (X = e.config) == null ? void 0 : X.name
      }, {
        default: o(() => [
          d(ne, b({
            modelValue: n.value,
            "onUpdate:modelValue": l[7] || (l[7] = (t) => n.value = t)
          }, a.$attrs), null, 16, ["modelValue"])
        ]),
        _: 1
      }, 8, ["label", "labelWidth", "name"])) : e.config.type === "TYPE_SELECT" ? (m(), f(u, {
        key: 8,
        "label-width": e.config.showLabel ? null : 0,
        name: (j = e.config) == null ? void 0 : j.name,
        label: (q = e.config) == null ? void 0 : q.label
      }, {
        default: o(() => [
          d(k, null, {
            prepend: o(() => [
              d(y, {
                modelValue: V.value,
                "onUpdate:modelValue": l[9] || (l[9] = (t) => V.value = t),
                class: "type-select",
                options: W.value,
                style: Z({ width: e.config.typeWidth })
              }, null, 8, ["modelValue", "options", "style"])
            ]),
            default: o(() => [
              d(y, b({
                modelValue: n.value,
                "onUpdate:modelValue": l[8] || (l[8] = (t) => n.value = t)
              }, a.$attrs, { options: x.value }), null, 16, ["modelValue", "options"])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["label-width", "name", "label"])) : e.config.type === "TYPE_INPUT" ? (m(), f(u, {
        key: 9,
        label: (J = e.config) == null ? void 0 : J.label,
        "label-width": (M = e.config) == null ? void 0 : M.labelWidth,
        name: (Q = e.config) == null ? void 0 : Q.name,
        class: "w-full"
      }, {
        default: o(() => {
          var t;
          return [
            d(k, { class: "w-full" }, de({
              prepend: o(() => [
                d(y, {
                  modelValue: V.value,
                  "onUpdate:modelValue": l[11] || (l[11] = (v) => V.value = v),
                  class: "type-select",
                  options: W.value,
                  style: Z({ width: e.config.typeWidth })
                }, null, 8, ["modelValue", "options", "style"])
              ]),
              default: o(() => [
                d(r, b({
                  modelValue: n.value,
                  "onUpdate:modelValue": l[10] || (l[10] = (v) => n.value = v)
                }, a.$attrs), null, 16, ["modelValue"])
              ]),
              _: 2
            }, [
              (t = e.config) != null && t.appendShow ? {
                name: "append",
                fn: o(() => [
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
  ge as default
};

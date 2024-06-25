import { defineComponent as S, resolveComponent as i, openBlock as e, createElementBlock as c, createElementVNode as y, normalizeStyle as m, toDisplayString as a, renderSlot as $, Fragment as B, renderList as N, createBlock as o, withCtx as n, createVNode as b, mergeProps as r, createTextVNode as d, createCommentVNode as T, withModifiers as k } from "vue";
const E = { class: "fcb my-table-head-wrapper" }, H = { class: "flex items-center" }, z = { class: "base-table-content" }, D = { key: 1 }, F = { key: 2 }, M = /* @__PURE__ */ S({
  inheritAttrs: !1,
  name: "TBaseTableHead",
  __name: "BaseTableHead",
  props: {
    config: {}
  },
  setup(A, { emit: P }) {
    const C = (p) => {
      _("openPage", p);
    }, _ = P, u = A;
    return (p, f) => {
      var h, V;
      const x = i("t-icon"), l = i("t-button"), v = i("t-dropdown"), w = i("t-badge");
      return e(), c("div", E, [
        y("div", H, [
          y("div", {
            class: "title",
            style: m((h = u.config) == null ? void 0 : h.style)
          }, a((V = u.config) == null ? void 0 : V.title), 5),
          $(p.$slots, "default")
        ]),
        y("div", z, [
          (e(!0), c(B, null, N(u.config.btn, (t, g) => (e(), c("span", {
            key: g,
            class: "base-table-content__btn"
          }, [
            t.cate === "dropdown" ? (e(), o(v, {
              key: 0,
              class: "base-table-content__btn",
              options: t.options,
              onClick: f[0] || (f[0] = (s) => _("click", s))
            }, {
              default: n(() => [
                b(l, r({ ref_for: !0 }, t.attrs), {
                  default: n(() => [
                    d(a(t.text) + " ", 1),
                    t.icon ? (e(), o(x, {
                      key: 0,
                      style: { "margin-top": "2px", "margin-left": "2px" },
                      name: t.icon
                    }, null, 8, ["name"])) : T("", !0)
                  ]),
                  _: 2
                }, 1040)
              ]),
              _: 2
            }, 1032, ["options"])) : t.url ? (e(), c("span", D, [
              t.badge ? (e(), o(w, r({
                key: 0,
                count: t.badgeValue,
                ref_for: !0
              }, t.badgeAttrs), {
                default: n(() => [
                  b(l, r({ ref_for: !0 }, t.attrs, {
                    onClick: k((s) => C(t.url), ["stop"])
                  }), {
                    default: n(() => [
                      d(a(t.text), 1)
                    ]),
                    _: 2
                  }, 1040, ["onClick"])
                ]),
                _: 2
              }, 1040, ["count"])) : (e(), o(l, r({
                key: 1,
                ref_for: !0
              }, t.attrs, {
                onClick: k((s) => C(t.url), ["stop"])
              }), {
                default: n(() => [
                  d(a(t.text), 1)
                ]),
                _: 2
              }, 1040, ["onClick"]))
            ])) : (e(), c("span", F, [
              t.badge ? (e(), o(w, r({
                key: 0,
                count: t.badgeValue,
                ref_for: !0
              }, t.badgeAttrs), {
                default: n(() => [
                  b(l, r({ ref_for: !0 }, t.attrs, {
                    onClick: k((s) => _("click", t.event), ["stop"])
                  }), {
                    default: n(() => [
                      d(a(t.text), 1)
                    ]),
                    _: 2
                  }, 1040, ["onClick"])
                ]),
                _: 2
              }, 1040, ["count"])) : (e(), o(l, r({
                key: 1,
                ref_for: !0
              }, t.attrs, {
                onClick: k((s) => _("click", t.event), ["stop"])
              }), {
                default: n(() => [
                  d(a(t.text), 1)
                ]),
                _: 2
              }, 1040, ["onClick"]))
            ]))
          ]))), 128)),
          (e(!0), c(B, null, N(u.config.dropdown, (t, g) => (e(), o(v, {
            key: g,
            class: "base-table-content__btn",
            options: t.options,
            onClick: f[1] || (f[1] = (s) => _("click", s))
          }, {
            default: n(() => [
              b(l, r({ ref_for: !0 }, t.btn.attrs), {
                default: n(() => [
                  d(a(t.btn.text) + " ", 1),
                  t.btn.icn ? (e(), o(x, {
                    key: 0,
                    style: { "margin-top": "2px", "margin-left": "2px" },
                    name: t.btn.icn
                  }, null, 8, ["name"])) : T("", !0)
                ]),
                _: 2
              }, 1040)
            ]),
            _: 2
          }, 1032, ["options"]))), 128)),
          $(p.$slots, "btns")
        ])
      ]);
    };
  }
});
export {
  M as default
};

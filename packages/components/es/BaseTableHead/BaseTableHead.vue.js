import { defineComponent as T, resolveComponent as b, openBlock as e, createElementBlock as c, createElementVNode as y, normalizeStyle as E, toDisplayString as a, renderSlot as h, Fragment as B, renderList as N, createBlock as o, withCtx as n, createVNode as i, mergeProps as s, createTextVNode as d, createCommentVNode as A, withModifiers as k } from "vue";
const H = { class: "fcb base-table-head-wrapper" }, m = { class: "flex items-center" }, z = { class: "base-table-content" }, D = { key: 1 }, F = { key: 2 }, M = /* @__PURE__ */ T({
  name: "ABaseTableHead",
  __name: "BaseTableHead",
  props: {
    config: {}
  },
  setup(P, { emit: S }) {
    const C = (p) => {
      _("openPage", p);
    }, _ = S, u = P;
    return (p, f) => {
      var V, $;
      const x = b("t-icon"), l = b("t-button"), v = b("t-dropdown"), w = b("t-badge");
      return e(), c("div", H, [
        y("div", m, [
          y("div", {
            class: "title",
            style: E((V = u.config) == null ? void 0 : V.style)
          }, a(($ = u.config) == null ? void 0 : $.title), 5),
          h(p.$slots, "default")
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
              onClick: f[0] || (f[0] = (r) => _("click", r))
            }, {
              default: n(() => [
                i(l, s({ ref_for: !0 }, t.attrs), {
                  default: n(() => [
                    d(a(t.text) + " ", 1),
                    t.icon ? (e(), o(x, {
                      key: 0,
                      style: { "margin-top": "2px", "margin-left": "2px" },
                      name: t.icon
                    }, null, 8, ["name"])) : A("", !0)
                  ]),
                  _: 2
                }, 1040)
              ]),
              _: 2
            }, 1032, ["options"])) : t.url ? (e(), c("span", D, [
              t.badge ? (e(), o(w, s({
                key: 0,
                count: t.badgeValue,
                ref_for: !0
              }, t.badgeAttrs), {
                default: n(() => [
                  i(l, s({ ref_for: !0 }, t.attrs, {
                    onClick: k((r) => C(t.url), ["stop"])
                  }), {
                    default: n(() => [
                      d(a(t.text), 1)
                    ]),
                    _: 2
                  }, 1040, ["onClick"])
                ]),
                _: 2
              }, 1040, ["count"])) : (e(), o(l, s({
                key: 1,
                ref_for: !0
              }, t.attrs, {
                onClick: k((r) => C(t.url), ["stop"])
              }), {
                default: n(() => [
                  d(a(t.text), 1)
                ]),
                _: 2
              }, 1040, ["onClick"]))
            ])) : (e(), c("span", F, [
              t.badge ? (e(), o(w, s({
                key: 0,
                count: t.badgeValue,
                ref_for: !0
              }, t.badgeAttrs), {
                default: n(() => [
                  i(l, s({ ref_for: !0 }, t.attrs, {
                    onClick: k((r) => _("click", t.event), ["stop"])
                  }), {
                    default: n(() => [
                      d(a(t.text), 1)
                    ]),
                    _: 2
                  }, 1040, ["onClick"])
                ]),
                _: 2
              }, 1040, ["count"])) : (e(), o(l, s({
                key: 1,
                ref_for: !0
              }, t.attrs, {
                onClick: k((r) => _("click", t.event), ["stop"])
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
            onClick: f[1] || (f[1] = (r) => _("click", r))
          }, {
            default: n(() => [
              i(l, s({ ref_for: !0 }, t.btn.attrs), {
                default: n(() => [
                  d(a(t.btn.text) + " ", 1),
                  t.btn.icn ? (e(), o(x, {
                    key: 0,
                    style: { "margin-top": "2px", "margin-left": "2px" },
                    name: t.btn.icn
                  }, null, 8, ["name"])) : A("", !0)
                ]),
                _: 2
              }, 1040)
            ]),
            _: 2
          }, 1032, ["options"]))), 128)),
          h(p.$slots, "btns")
        ])
      ]);
    };
  }
});
export {
  M as default
};

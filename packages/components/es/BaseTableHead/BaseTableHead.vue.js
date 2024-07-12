import { defineComponent as H, resolveComponent as d, resolveDirective as K, openBlock as e, createElementBlock as p, createElementVNode as y, normalizeStyle as z, toDisplayString as a, renderSlot as B, Fragment as A, renderList as N, withDirectives as D, createBlock as o, withCtx as n, createVNode as b, mergeProps as r, createTextVNode as l, createCommentVNode as P, withModifiers as k } from "vue";
const F = { class: "fcb base-table-head-wrapper" }, L = { class: "flex items-center" }, M = { class: "base-table-content" }, j = { key: 1 }, q = { key: 2 }, I = /* @__PURE__ */ H({
  name: "ABaseTableHead",
  __name: "BaseTableHead",
  props: {
    config: {}
  },
  setup(S, { emit: T }) {
    const v = (u) => {
      _("openPage", u);
    }, _ = T, f = S;
    return (u, i) => {
      var V, $;
      const C = d("t-icon"), c = d("t-button"), x = d("t-dropdown"), h = d("t-badge"), E = d("t-popconfirm"), w = K("has");
      return e(), p("div", F, [
        y("div", L, [
          y("div", {
            class: "title",
            style: z((V = f.config) == null ? void 0 : V.style)
          }, a(($ = f.config) == null ? void 0 : $.title), 5),
          B(u.$slots, "default")
        ]),
        y("div", M, [
          (e(!0), p(A, null, N(f.config.btn, (t, g) => D((e(), p("span", {
            key: g,
            class: "base-table-content__btn"
          }, [
            t.cate === "dropdown" ? (e(), o(x, {
              key: 0,
              class: "base-table-content__btn",
              options: t.options,
              onClick: i[0] || (i[0] = (s) => _("click", s))
            }, {
              default: n(() => [
                b(c, r({ ref_for: !0 }, t.attrs), {
                  default: n(() => [
                    l(a(t.text) + " ", 1),
                    t.icon ? (e(), o(C, {
                      key: 0,
                      style: { "margin-top": "2px", "margin-left": "2px" },
                      name: t.icon
                    }, null, 8, ["name"])) : P("", !0)
                  ]),
                  _: 2
                }, 1040)
              ]),
              _: 2
            }, 1032, ["options"])) : t.url ? (e(), p("span", j, [
              t.badge ? (e(), o(h, r({
                key: 0,
                count: t.badgeValue,
                ref_for: !0
              }, t.badgeAttrs), {
                default: n(() => [
                  b(c, r({ ref_for: !0 }, t.attrs, {
                    onClick: k((s) => v(t.url), ["stop"])
                  }), {
                    default: n(() => [
                      l(a(t.text), 1)
                    ]),
                    _: 2
                  }, 1040, ["onClick"])
                ]),
                _: 2
              }, 1040, ["count"])) : (e(), o(c, r({
                key: 1,
                ref_for: !0
              }, t.attrs, {
                onClick: k((s) => v(t.url), ["stop"])
              }), {
                default: n(() => [
                  l(a(t.text), 1)
                ]),
                _: 2
              }, 1040, ["onClick"]))
            ])) : (e(), p("span", q, [
              t.badge ? (e(), o(h, r({
                key: 0,
                count: t.badgeValue,
                ref_for: !0
              }, t.badgeAttrs), {
                default: n(() => [
                  b(c, r({ ref_for: !0 }, t.attrs, {
                    onClick: k((s) => _("click", t.event), ["stop"])
                  }), {
                    default: n(() => [
                      l(a(t.text), 1)
                    ]),
                    _: 2
                  }, 1040, ["onClick"])
                ]),
                _: 2
              }, 1040, ["count"])) : t.popcon ? (e(), o(E, r({
                key: 1,
                theme: "default",
                content: t.popconValue,
                ref_for: !0
              }, t.popconAttrs, {
                onConfirm: (s) => _("click", t.event)
              }), {
                default: n(() => [
                  b(c, r({ ref_for: !0 }, t.attrs), {
                    default: n(() => [
                      l(a(t.text), 1)
                    ]),
                    _: 2
                  }, 1040)
                ]),
                _: 2
              }, 1040, ["content", "onConfirm"])) : (e(), o(c, r({
                key: 2,
                ref_for: !0
              }, t.attrs, {
                onClick: k((s) => _("click", t.event), ["stop"])
              }), {
                default: n(() => [
                  l(a(t.text), 1)
                ]),
                _: 2
              }, 1040, ["onClick"]))
            ]))
          ])), [
            [w, t.authKey]
          ])), 128)),
          (e(!0), p(A, null, N(f.config.dropdown, (t, g) => (e(), o(x, {
            key: g,
            class: "base-table-content__btn",
            options: t.options,
            onClick: i[1] || (i[1] = (s) => _("click", s))
          }, {
            default: n(() => [
              D((e(), o(c, r({ ref_for: !0 }, t.btn.attrs), {
                default: n(() => [
                  l(a(t.btn.text) + " ", 1),
                  t.btn.icn ? (e(), o(C, {
                    key: 0,
                    style: { "margin-top": "2px", "margin-left": "2px" },
                    name: t.btn.icn
                  }, null, 8, ["name"])) : P("", !0)
                ]),
                _: 2
              }, 1040)), [
                [w, t.btn.authKey]
              ])
            ]),
            _: 2
          }, 1032, ["options"]))), 128)),
          B(u.$slots, "btns")
        ])
      ]);
    };
  }
});
export {
  I as default
};

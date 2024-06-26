import { defineComponent as R, computed as l, ref as k, resolveComponent as b, openBlock as v, createBlock as C, mergeProps as K } from "vue";
const V = /* @__PURE__ */ R({
  inheritAttrs: !1,
  name: "ABaseTable",
  __name: "BaseTable",
  props: {
    footerSummary: {},
    fixedRows: {},
    footData: {},
    columns: {},
    data: {},
    dataLoading: {},
    pagination: {},
    rowKey: {},
    selectedRowKeys: {},
    editableRowKeys: {},
    tableRef: {}
  },
  emits: ["row-validate", "row-edit", "validate", "cell-click", "change", "select-change", "page-change"],
  setup(r, { expose: s, emit: i }) {
    const t = r, d = l(() => t.footData ? t.footData : null), c = l(() => t.fixedRows != null ? t.fixedRows : null), o = i, n = k(), g = (e) => {
      o("cell-click", e);
    }, f = (e, a) => {
      o("select-change", e, a);
    }, m = (e, a) => {
      o("page-change", e, a);
    }, w = (e, a) => {
      o("change", e, a);
    }, u = (e) => {
      o("row-edit", e);
    }, p = (e) => {
      o("row-validate", e);
    }, h = (e) => {
      o("validate", e);
    };
    return s({
      triggerRowValidate: (e) => {
        n.value.validateRowData(e).then((a) => {
          console.log("Event Table Promise Validate:", a);
        });
      }
    }), (e, a) => {
      const y = b("t-table");
      return v(), C(y, K({
        ref_key: "tableRef",
        ref: n,
        data: e.data,
        columns: e.columns,
        "row-key": e.rowKey,
        "vertical-align": "middle",
        hover: !0,
        pagination: e.pagination,
        loading: e.dataLoading,
        "selected-row-keys": e.selectedRowKeys,
        "editable-row-keys": e.editableRowKeys,
        "cell-empty-content": "-",
        footerSummar: e.footerSummary,
        "fixed-rows": c.value,
        "foot-data": d.value,
        onCellClick: g,
        onSelectChange: f,
        onPageChange: m,
        onChange: w,
        onRowEdit: u,
        onRowValidate: p,
        onValidate: h
      }, e.$attrs), null, 16, ["data", "columns", "row-key", "pagination", "loading", "selected-row-keys", "editable-row-keys", "footerSummar", "fixed-rows", "foot-data"]);
    };
  }
});
export {
  V as default
};

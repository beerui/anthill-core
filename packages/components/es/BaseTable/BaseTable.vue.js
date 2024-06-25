import { defineComponent as k, computed as i, ref as b, resolveComponent as v, openBlock as C, createBlock as x, mergeProps as K } from "vue";
const D = /* @__PURE__ */ k({
  inheritAttrs: !1,
  name: "ABaseTable",
  __name: "BaseTable",
  props: [
    "footerSummary",
    "fixedRows",
    "footData",
    "columns",
    "data",
    "dataLoading",
    "pagination",
    "rowKey",
    "selectedRowKeys",
    "editableRowKeys",
    "tableRef"
  ],
  emits: [
    "page-change",
    "change",
    "select-change",
    "row-edit",
    "row-validate",
    "validate",
    "cell-click"
  ],
  setup(a, { expose: c, emit: r }) {
    const n = a, s = i(() => n.footData ? n.footData : null), d = i(() => n.fixedRows != null ? n.fixedRows : null), o = r, l = b(), g = (...e) => {
      o("cell-click", ...e);
    }, f = (e, { selectedRowData: t }) => {
      o("select-change", e, { selectedRowData: t });
    }, m = (e, t) => {
      o("page-change", e, t);
    }, w = (e, t) => {
      o("change", e, t);
    }, u = (e) => {
      o("row-edit", e);
    }, h = (e) => {
      o("row-validate", e);
    }, y = (e) => {
      o("validate", e);
    };
    return c({
      triggerRowValidate: (e) => {
        l.value.validateRowData(e).then((t) => {
          console.log("Event Table Promise Validate:", t);
        });
      }
    }), (e, t) => {
      const R = v("t-table");
      return C(), x(R, K({
        ref_key: "tableRef",
        ref: l,
        data: a.data,
        columns: a.columns,
        "row-key": a.rowKey,
        "vertical-align": "middle",
        hover: !0,
        pagination: a.pagination,
        loading: a.dataLoading,
        "selected-row-keys": a.selectedRowKeys,
        "editable-row-keys": a.editableRowKeys,
        "cell-empty-content": "-",
        footerSummar: a.footerSummary,
        "fixed-rows": d.value,
        "foot-data": s.value,
        onCellClick: g,
        onSelectChange: f,
        onPageChange: m,
        onChange: w,
        onRowEdit: u,
        onRowValidate: h,
        onValidate: y
      }, e.$attrs), null, 16, ["data", "columns", "row-key", "pagination", "loading", "selected-row-keys", "editable-row-keys", "footerSummar", "fixed-rows", "foot-data"]);
    };
  }
});
export {
  D as default
};

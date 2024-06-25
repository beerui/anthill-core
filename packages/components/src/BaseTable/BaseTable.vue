<template>
  <t-table
    ref="tableRef"
    :data="data"
    :columns="columns"
    :row-key="rowKey"
    vertical-align="middle"
    :hover="true"
    :pagination="pagination"
    :loading="dataLoading"
    :selected-row-keys="selectedRowKeys"
    :editable-row-keys="editableRowKeys"
    cell-empty-content="-"
    :footerSummar="footerSummary"
    :fixed-rows="fixedRow"
    :foot-data="footDatas"
    @cell-click="cellClick"
    @select-change="rehandleSelectChange"
    @page-change="rehandlePageChange"
    @change="rehandleChange"
    @row-edit="onRowEdit"
    @row-validate="onRowValidate"
    @validate="onValidate"
    v-bind="$attrs"
  />
</template>
<script lang="ts" setup>
  defineOptions({
    inheritAttrs: false,
    name: 'ABaseTable'
  })
  import { computed, ref } from 'vue';
  import { PageInfo, TableRowData } from 'tdesign-vue-next';

  const props = defineProps([
    'footerSummary',
    'fixedRows',
    'footData',
    'columns',
    'data',
    'dataLoading',
    'pagination',
    'rowKey',
    'selectedRowKeys',
    'editableRowKeys',
    'tableRef',
  ]);


  const footDatas = computed(() => {
    if (!props.footData) {
      return null;
    }
    return props.footData;
  });
  const fixedRow = computed(() => {
    if (props.fixedRows!=null) {
      return props.fixedRows;
    }
    return null;
  });


  const emits = defineEmits([
    'page-change',
    'change',
    'select-change',
    'row-edit',
    'row-validate',
    'validate',
    'cell-click',
  ]);
  const tableRef = ref();

  const cellClick = (...args: any) => {
    emits('cell-click', ...args);
  };
  const rehandleSelectChange = (value: number[], { selectedRowData }: any) => {
    emits('select-change', value, { selectedRowData });
  };

  const rehandlePageChange = (pageInfo: PageInfo, newDataSource: TableRowData[]) => {
    emits('page-change', pageInfo, newDataSource);
  };
  const rehandleChange = (changeParams: any, triggerAndData: any) => {
    emits('change', changeParams, triggerAndData);
  };

  const onRowEdit = (params: any) => {
    emits('row-edit', params);
  };

  // 行校验反馈事件，tableRef.value.validateRowData 执行结束后触发
  const onRowValidate = (params: any) => {
    emits('row-validate', params);
  };

  // 表格全量数据校验反馈事件，tableRef.value.validateTableData() 执行结束后触发
  const onValidate = (params: any) => {
    emits('validate', params);
  };

  // 触发行校验
  const triggerRowValidate = (id: any) => {
    (tableRef.value as TableRowData).validateRowData(id).then((params: any) => {
      console.log('Event Table Promise Validate:', params);
    });
  };

  defineExpose({
    triggerRowValidate,
  });
</script>

// @ts-ignore
import BaseTable from './BaseTable.vue';

/**
 * 定义props类型
 */
export interface BaseTableProps {
    'footerSummary'?: any;
    'fixedRows'?: any;
    'footData'?: any;
    'columns'?: any;
    'data'?: any;
    'dataLoading'?: any;
    'pagination'?: any;
    'rowKey'?: any;
    'selectedRowKeys'?: any;
    'editableRowKeys'?: any;
    'tableRef'?: any;
}
/**
 * 定义emit类型
 */
export type BaseTableEmits = {
    'page-change': [value: any];
    'change': [value: any];
    'select-change': [value: any];
    'row-edit': [value: any];
    'row-validate': [value: any];
    'validate': [value: any];
    'cell-click': [value: any];
}
/**
 * 定义instance类型
 */
export type BaseTableInstance = InstanceType<typeof BaseTable>;

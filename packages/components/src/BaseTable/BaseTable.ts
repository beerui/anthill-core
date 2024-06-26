// @ts-ignore
import BaseTable from './BaseTable.vue';
import {PageInfo, TableRowData} from "tdesign-vue-next";

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
    (e: 'row-validate', params: any): void;
    (e: 'row-edit', params: any): void;
    (e: 'validate', params: any): void;
    (e: 'cell-click', args: any): void;
    (e: 'change', value: any, item: any): void;
    (e: 'select-change', value: any, item: any): void;
    (e: 'page-change', pageInfo: PageInfo, newDataSource: TableRowData[]): void;
}
/**
 * 定义instance类型
 */
export type BaseTableInstance = InstanceType<typeof BaseTable>;

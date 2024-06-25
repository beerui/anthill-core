import {DropdownOption, TdButtonProps, TdFormItemProps, TdLinkProps, TdPopconfirmProps} from "tdesign-vue-next";
// @ts-ignore
import BaseTableHead from './BaseTableHead.vue';

/**
 * 定义props类型
 */
export interface BaseTableHeadProps {
   /**
    * 面包屑的路由数据
    */
   config: ConfigType
}

/**
 * 定义emit类型
 */
export type BaseTableHeadEmits = {
    'openPage': [value: any];
}
/**
 * 定义instance类型
 */
export type BaseTableHeadInstance = InstanceType<typeof BaseTableHead>;

export type ConfigType = {
    config: BTN_LIST_TYPE;
};
export type OperatorConfigItem = {
    name: string;
    pop?: { show: boolean; showType?: string } & TdPopconfirmProps & DropdownOption;
    attrs?: TdLinkProps;
};


export type BaseFormItemType = {
    name?: string;
    value: any;
    typeValue?: any;
    type:
        | 'SLOT'
        | 'INPUT'
        | 'SELECT'
        | 'DATE_PICKER'
        | 'DATE_RANGE_PICKER'
        | 'CASCADER'
        | 'ORGANIZE_TREE'
        | 'RADIO'
        | 'CHECKBOX'
        | 'TREE_SELECT'
        | 'DROPDOWN'
        | 'TYPE_SELECT'
        | 'TYPE_INPUT';
    label?: string;
    typeWidth?: string;
    appendShow?: boolean;
    appendText?: string;
    default?: any;
    attrs?: any;
    trigger?: string; // immediately-value变更后立即触发
    showLabel?: boolean;
    span?: number;
} & TdFormItemProps;


export type BTN_LIST_BTN_TYPE = {
    attrs?: TdButtonProps;
    event?: any;
    trigger?: any;
    url?: any;
    text: string;
    icn?: string;
    icon?: string;
    badge?: boolean;
    badgeValue?: any;
    badgeAttrs?: any;
    popcon?: boolean;
    popconValue?: any;
    popconAttrs?: any;
    cate?: 'dropdown';
    options?: any[];
    upUrl?: any;
    acceptType?: any;
    upAttrs?: any;
    acceptRegex?: any;
};

export type BTN_LIST_TYPE = {
    title?: string;
    btn?: BTN_LIST_BTN_TYPE[];
    search?: BaseFormItemType[];
    dropdown?: { btn: BTN_LIST_BTN_TYPE; options: { content: string; value: any; event: any }[] }[];
    style?: any;
};

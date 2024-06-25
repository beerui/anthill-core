// @ts-ignore
import TBaseSearchBarProps from './BaseSearchBar.vue';
// @ts-ignore
import BaseFormItem from './BaseFormItem.vue';
import {BaseFormItemType} from "../BaseTableHead";

/**
 * 定义props类型
 */
export interface TBaseSearchBarProps {
   config: BaseFormItemType[];
   hasBtn?: boolean;
   btnBoxStyle?: any;
   btnSpan?: number;
}
export interface BaseFormItemProps {
   modelValue?: any;
   typeValue?: any;
   config?: any;
}
/**
 * 定义emit类型
 */
export type TBaseSearchBarPropsEmits = {
   'reset': [value: any];
   'submit': [value: any];
}
export type BaseFormItemPropsEmits = {
   'update:modelValue': [value: string]
   'update:typeValue': [value: string]
   'change': [value: any];
}
/**
 * 定义instance类型
 */
export type TBaseSearchBarInstance = InstanceType<typeof TBaseSearchBarProps>;
export type BaseFormItem = InstanceType<typeof BaseFormItem>;

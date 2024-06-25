// @ts-ignore
import BaseTableHead from './BaseTableHead.vue';
import { ConfigType } from '../../global';

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

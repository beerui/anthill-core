// @ts-ignore
import BaseBreadcrumb from './BaseBreadcrumb.vue';

/**
 * 定义props类型
 */
export interface BaseBreadcrumbProps {
   /**
    * 面包屑的路由数据
    */
    list?: any[];
    isBack?: boolean;
    maxItemWidth?: string;
    mb?: number;
}

/**
 * 定义instance类型
 */
export type BaseBreadcrumbInstance = InstanceType<typeof BaseBreadcrumb>;

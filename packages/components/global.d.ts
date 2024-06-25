import {
    TdButtonProps,
    TdFormItemProps,
    TdLinkProps,
    TdPopconfirmProps,
    DropdownOption,
} from 'tdesign-vue-next';

declare module 'vue' {
    export interface GlobalComponents {
        TBaseBreadcrumb: typeof import('@brewer/anthill-core')['TBaseBreadcrumb']
    }

    interface ComponentCustomProperties {
    }
}


export declare type ConfigType = {
    config: BTN_LIST_TYPE;
};
export declare type OperatorConfigItem = {
    name: string;
    pop?: { show: boolean; showType?: string } & TdPopconfirmProps & DropdownOption;
    attrs?: TdLinkProps;
};


export declare type BaseFormItemType = {
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


export declare type BTN_LIST_BTN_TYPE = {
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

export declare type BTN_LIST_TYPE = {
    title?: string;
    btn?: BTN_LIST_BTN_TYPE[];
    search?: BaseFormItemType[];
    dropdown?: { btn: BTN_LIST_BTN_TYPE; options: { content: string; value: any; event: any }[] }[];
    style?: any;
};

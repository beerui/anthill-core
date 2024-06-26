import { AllowedComponentProps } from 'vue';
import { App } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsBase } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { CreateComponentPublicInstance } from 'vue';
import { DefineComponent } from 'vue';
import { DropdownOption } from 'tdesign-vue-next';
import { ExtractPropTypes } from 'vue';
import { PageInfo } from 'tdesign-vue-next';
import { Plugin as Plugin_2 } from 'vue';
import { PropType } from 'vue';
import { PublicProps } from 'vue';
import { TableRowData } from 'tdesign-vue-next';
import { TdButtonProps } from 'tdesign-vue-next';
import { TdFormItemProps } from 'tdesign-vue-next';
import { TdLinkProps } from 'tdesign-vue-next';
import { TdPopconfirmProps } from 'tdesign-vue-next';
import { VNodeProps } from 'vue';

declare const __VLS_component: DefineComponent<{}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< ExtractPropTypes<{}>>, {}, {}>;

declare const __VLS_component_2: DefineComponent<__VLS_TypePropsToRuntimeProps<ConfigType>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    [x: string]: (event: any) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<__VLS_TypePropsToRuntimeProps<ConfigType>>>, {}, {}>;

declare const __VLS_component_3: DefineComponent<{}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    submit: (...args: any[]) => void;
    reset: (...args: any[]) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<{}>> & {
    onReset?: (...args: any[]) => any;
    onSubmit?: (...args: any[]) => any;
}, {}, {}>;

declare type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_2<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_3<T> = T extends undefined ? never : T;

declare function __VLS_template(): {
    right?(_: {}): any;
};

declare function __VLS_template_2(): {
    default?(_: {}): any;
    btns?(_: {}): any;
};

declare function __VLS_template_3(): Partial<Record<string, (_: {
    data: BaseFormItemType;
}) => any>> & {
    btnPre?(_: {}): any;
    default?(_: {}): any;
};

declare type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_2<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_2<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToRuntimeProps_3<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_3<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_2<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_3<T, S> = T & {
    new (): {
        $slots: S;
    };
};

export declare const ABaseBreadcrumb: SFCWithInstall<{
    new (...args: any[]): CreateComponentPublicInstance<Readonly< ExtractPropTypes<{}>>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly< ExtractPropTypes<{}>>, {}, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly< ExtractPropTypes<{}>>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{}>>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        right?(_: {}): any;
    };
})> & Record<string, any>;

export declare const ABaseSearchBar: SFCWithInstall<{
    new (...args: any[]): CreateComponentPublicInstance<Readonly< ExtractPropTypes<{}>> & {
        onReset?: (...args: any[]) => any;
        onSubmit?: (...args: any[]) => any;
    }, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        submit: (...args: any[]) => void;
        reset: (...args: any[]) => void;
    }, VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly< ExtractPropTypes<{}>> & {
        onReset?: (...args: any[]) => any;
        onSubmit?: (...args: any[]) => any;
    }, {}, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly< ExtractPropTypes<{}>> & {
        onReset?: (...args: any[]) => any;
        onSubmit?: (...args: any[]) => any;
    }, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{}>> & {
    onReset?: (...args: any[]) => any;
    onSubmit?: (...args: any[]) => any;
}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    submit: (...args: any[]) => void;
    reset: (...args: any[]) => void;
}, string, {}, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: Partial<Record<string, (_: {
        data: BaseFormItemType;
    }) => any>> & {
        btnPre?(_: {}): any;
        default?(_: {}): any;
    };
})> & Record<string, any>;

export declare const ABaseTable: SFCWithInstall<DefineComponent<{
    footerSummary: {
        type: PropType<any>;
    };
    fixedRows: {
        type: PropType<any>;
    };
    footData: {
        type: PropType<any>;
    };
    columns: {
        type: PropType<any>;
    };
    data: {
        type: PropType<any>;
    };
    dataLoading: {
        type: PropType<any>;
    };
    pagination: {
        type: PropType<any>;
    };
    rowKey: {
        type: PropType<any>;
    };
    selectedRowKeys: {
        type: PropType<any>;
    };
    editableRowKeys: {
        type: PropType<any>;
    };
    tableRef: {
        type: PropType<any>;
    };
}, {
    triggerRowValidate: (id: any) => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "row-validate": (params: any) => void;
    "row-edit": (params: any) => void;
    validate: (params: any) => void;
    "cell-click": (args: any) => void;
    change: (value: any, item: any) => void;
    "select-change": (value: any, item: any) => void;
    "page-change": (pageInfo: PageInfo, newDataSource: TableRowData[]) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<{
    footerSummary: {
        type: PropType<any>;
    };
    fixedRows: {
        type: PropType<any>;
    };
    footData: {
        type: PropType<any>;
    };
    columns: {
        type: PropType<any>;
    };
    data: {
        type: PropType<any>;
    };
    dataLoading: {
        type: PropType<any>;
    };
    pagination: {
        type: PropType<any>;
    };
    rowKey: {
        type: PropType<any>;
    };
    selectedRowKeys: {
        type: PropType<any>;
    };
    editableRowKeys: {
        type: PropType<any>;
    };
    tableRef: {
        type: PropType<any>;
    };
}>> & {
    onChange?: (value: any, item: any) => any;
    "onRow-validate"?: (params: any) => any;
    "onRow-edit"?: (params: any) => any;
    onValidate?: (params: any) => any;
    "onCell-click"?: (args: any) => any;
    "onSelect-change"?: (value: any, item: any) => any;
    "onPage-change"?: (pageInfo: PageInfo, newDataSource: TableRowData[]) => any;
}, {}, {}>> & Record<string, any>;

export declare const ABaseTableHead: SFCWithInstall<{
    new (...args: any[]): CreateComponentPublicInstance<Readonly< ExtractPropTypes<{
        config: {
            type: PropType<BTN_LIST_TYPE>;
            required: true;
        };
    }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        [x: string]: (event: any) => void;
    }, VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly< ExtractPropTypes<{
        config: {
            type: PropType<BTN_LIST_TYPE>;
            required: true;
        };
    }>>, {}, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly< ExtractPropTypes<{
        config: {
            type: PropType<BTN_LIST_TYPE>;
            required: true;
        };
    }>>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
    config: {
        type: PropType<BTN_LIST_TYPE>;
        required: true;
    };
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    [x: string]: (event: any) => void;
}, string, {}, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
        btns?(_: {}): any;
    };
})> & Record<string, any>;

export declare type BaseBreadcrumbInstance = InstanceType<typeof _default_2>;

export declare interface BaseBreadcrumbProps {
    list?: any[];
    isBack?: boolean;
    maxItemWidth?: string;
    mb?: number;
}

export declare type BaseFormItem = InstanceType<typeof _default_6>;

export declare interface BaseFormItemProps {
    modelValue?: any;
    typeValue?: any;
    config?: any;
}

export declare type BaseFormItemPropsEmits = {
    'update:modelValue': [value: string];
    'update:typeValue': [value: string];
    'change': [value: any];
};

export declare type BaseFormItemType = {
    name?: string;
    value: any;
    typeValue?: any;
    type: 'SLOT' | 'INPUT' | 'SELECT' | 'DATE_PICKER' | 'DATE_RANGE_PICKER' | 'CASCADER' | 'ORGANIZE_TREE' | 'RADIO' | 'CHECKBOX' | 'TREE_SELECT' | 'DROPDOWN' | 'TYPE_SELECT' | 'TYPE_INPUT';
    label?: string;
    typeWidth?: string;
    appendShow?: boolean;
    appendText?: string;
    default?: any;
    attrs?: any;
    trigger?: string;
    showLabel?: boolean;
    span?: number;
} & TdFormItemProps;

export declare type BaseTableEmits = {
    (e: 'row-validate', params: any): void;
    (e: 'row-edit', params: any): void;
    (e: 'validate', params: any): void;
    (e: 'cell-click', args: any): void;
    (e: 'change', value: any, item: any): void;
    (e: 'select-change', value: any, item: any): void;
    (e: 'page-change', pageInfo: PageInfo, newDataSource: TableRowData[]): void;
};

export declare type BaseTableHeadEmits = {
    'openPage': [value: any];
};

export declare type BaseTableHeadInstance = InstanceType<typeof _default_3>;

export declare interface BaseTableHeadProps {
    config: ConfigType;
}

export declare type BaseTableInstance = InstanceType<typeof _default_4>;

export declare interface BaseTableProps {
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
    dropdown?: {
        btn: BTN_LIST_BTN_TYPE;
        options: {
            content: string;
            value: any;
            event: any;
        }[];
    }[];
    style?: any;
};

export declare type ConfigType = {
    config: BTN_LIST_TYPE;
};

declare const _default: {
    install: (Vue: App) => void;
};
export default _default;

declare const _default_2: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

declare const _default_3: __VLS_WithTemplateSlots_2<typeof __VLS_component_2, ReturnType<typeof __VLS_template_2>>;

declare const _default_4: DefineComponent<__VLS_TypePropsToRuntimeProps_2<BaseTableProps>, {
    triggerRowValidate: (id: any) => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "row-validate": (params: any) => void;
    "row-edit": (params: any) => void;
    validate: (params: any) => void;
    "cell-click": (args: any) => void;
    change: (value: any, item: any) => void;
    "select-change": (value: any, item: any) => void;
    "page-change": (pageInfo: PageInfo, newDataSource: TableRowData[]) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<__VLS_TypePropsToRuntimeProps_2<BaseTableProps>>> & {
    onChange?: (value: any, item: any) => any;
    "onRow-validate"?: (params: any) => any;
    "onRow-edit"?: (params: any) => any;
    onValidate?: (params: any) => any;
    "onCell-click"?: (args: any) => any;
    "onSelect-change"?: (value: any, item: any) => any;
    "onPage-change"?: (pageInfo: PageInfo, newDataSource: TableRowData[]) => any;
}, {}, {}>;

declare const _default_5: __VLS_WithTemplateSlots_3<typeof __VLS_component_3, ReturnType<typeof __VLS_template_3>>;

declare const _default_6: DefineComponent<__VLS_TypePropsToRuntimeProps_3<BaseFormItemProps>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (value: string) => void;
    "update:typeValue": (value: string) => void;
    change: (value: any) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<__VLS_TypePropsToRuntimeProps_3<BaseFormItemProps>>> & {
    onChange?: (value: any) => any;
    "onUpdate:modelValue"?: (value: string) => any;
    "onUpdate:typeValue"?: (value: string) => any;
}, {}, {}>;

export declare type OperatorConfigItem = {
    name: string;
    pop?: {
        show: boolean;
        showType?: string;
    } & TdPopconfirmProps & DropdownOption;
    attrs?: TdLinkProps;
};

declare type SFCWithInstall<T> = T & Plugin_2;

export declare type TBaseSearchBarInstance = InstanceType<typeof _default_5>;

export declare interface TBaseSearchBarProps {
    config?: BaseFormItemType[];
    hasBtn: boolean;
    btnBoxStyle?: any;
    btnSpan: number;
}

export declare type TBaseSearchBarPropsEmits = {
    'reset': any;
    'submit': any;
};

export { }

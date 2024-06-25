import { AllowedComponentProps } from 'vue';
import { App } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsBase } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { CreateComponentPublicInstance } from 'vue';
import { DefineComponent } from 'vue';
import { DropdownOption } from 'tdesign-vue-next';
import { ExtractPropTypes } from 'vue';
import { Plugin as Plugin_2 } from 'vue';
import { PropType } from 'vue';
import { PublicProps } from 'vue';
import { TdButtonProps } from 'tdesign-vue-next';
import { TdFormItemProps } from 'tdesign-vue-next';
import { TdLinkProps } from 'tdesign-vue-next';
import { TdPopconfirmProps } from 'tdesign-vue-next';
import { VNodeProps } from 'vue';

declare const __VLS_component: DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    isBack: boolean;
    maxItemWidth: string;
    mb: number;
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    isBack: boolean;
    maxItemWidth: string;
    mb: number;
}>>>, {
    isBack: boolean;
    maxItemWidth: string;
    mb: number;
}, {}>;

declare const __VLS_component_2: DefineComponent<__VLS_TypePropsToRuntimeProps_2<ConfigType>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    [x: string]: (event: any) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<__VLS_TypePropsToRuntimeProps_2<ConfigType>>>, {}, {}>;

declare const __VLS_component_3: DefineComponent<__VLS_WithDefaults_2<__VLS_TypePropsToRuntimeProps_3<Props_2>, {
    hasBtn: boolean;
    btnSpan: number;
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    submit: (...args: any[]) => void;
    reset: (...args: any[]) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<__VLS_WithDefaults_2<__VLS_TypePropsToRuntimeProps_3<Props_2>, {
    hasBtn: boolean;
    btnSpan: number;
}>>> & {
    onReset?: ((...args: any[]) => any) | undefined;
    onSubmit?: ((...args: any[]) => any) | undefined;
}, {
    hasBtn: boolean;
    btnSpan: number;
}, {}>;

declare type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_2<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_3<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_4<T> = T extends undefined ? never : T;

declare type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};

declare type __VLS_Prettify_2<T> = {
    [K in keyof T]: T[K];
} & {};

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

declare type __VLS_TypePropsToRuntimeProps_4<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_4<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};

declare type __VLS_WithDefaults_2<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify_2<P[K] & {
        default: D[K];
    }> : P[K];
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
    new (...args: any[]): CreateComponentPublicInstance<Readonly< ExtractPropTypes<{
        list: {
            type: PropType<any[]>;
        };
        isBack: {
            type: PropType<boolean>;
            default: boolean;
        };
        maxItemWidth: {
            type: PropType<string>;
            default: string;
        };
        mb: {
            type: PropType<number>;
            default: number;
        };
    }>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly< ExtractPropTypes<{
        list: {
            type: PropType<any[]>;
        };
        isBack: {
            type: PropType<boolean>;
            default: boolean;
        };
        maxItemWidth: {
            type: PropType<string>;
            default: string;
        };
        mb: {
            type: PropType<number>;
            default: number;
        };
    }>>, {
        isBack: boolean;
        maxItemWidth: string;
        mb: number;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly< ExtractPropTypes<{
        list: {
            type: PropType<any[]>;
        };
        isBack: {
            type: PropType<boolean>;
            default: boolean;
        };
        maxItemWidth: {
            type: PropType<string>;
            default: string;
        };
        mb: {
            type: PropType<number>;
            default: number;
        };
    }>>, {}, {}, {}, {}, {
        isBack: boolean;
        maxItemWidth: string;
        mb: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
    list: {
        type: PropType<any[]>;
    };
    isBack: {
        type: PropType<boolean>;
        default: boolean;
    };
    maxItemWidth: {
        type: PropType<string>;
        default: string;
    };
    mb: {
        type: PropType<number>;
        default: number;
    };
}>>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
    isBack: boolean;
    maxItemWidth: string;
    mb: number;
}, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        right?(_: {}): any;
    };
})> & Record<string, any>;

export declare const ABaseSearchBar: SFCWithInstall<{
    new (...args: any[]): CreateComponentPublicInstance<Readonly< ExtractPropTypes<{
        config: {
            type: PropType< BaseFormItemType[]>;
            required: true;
        };
        hasBtn: {
            type: PropType<boolean>;
            default: boolean;
        };
        btnBoxStyle: {
            type: PropType<any>;
        };
        btnSpan: {
            type: PropType<number>;
            default: number;
        };
    }>> & {
        onReset?: ((...args: any[]) => any) | undefined;
        onSubmit?: ((...args: any[]) => any) | undefined;
    }, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        submit: (...args: any[]) => void;
        reset: (...args: any[]) => void;
    }, VNodeProps & AllowedComponentProps & ComponentCustomProps & Readonly< ExtractPropTypes<{
        config: {
            type: PropType< BaseFormItemType[]>;
            required: true;
        };
        hasBtn: {
            type: PropType<boolean>;
            default: boolean;
        };
        btnBoxStyle: {
            type: PropType<any>;
        };
        btnSpan: {
            type: PropType<number>;
            default: number;
        };
    }>> & {
        onReset?: ((...args: any[]) => any) | undefined;
        onSubmit?: ((...args: any[]) => any) | undefined;
    }, {
        hasBtn: boolean;
        btnSpan: number;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly< ExtractPropTypes<{
        config: {
            type: PropType< BaseFormItemType[]>;
            required: true;
        };
        hasBtn: {
            type: PropType<boolean>;
            default: boolean;
        };
        btnBoxStyle: {
            type: PropType<any>;
        };
        btnSpan: {
            type: PropType<number>;
            default: number;
        };
    }>> & {
        onReset?: ((...args: any[]) => any) | undefined;
        onSubmit?: ((...args: any[]) => any) | undefined;
    }, {}, {}, {}, {}, {
        hasBtn: boolean;
        btnSpan: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly< ExtractPropTypes<{
    config: {
        type: PropType< BaseFormItemType[]>;
        required: true;
    };
    hasBtn: {
        type: PropType<boolean>;
        default: boolean;
    };
    btnBoxStyle: {
        type: PropType<any>;
    };
    btnSpan: {
        type: PropType<number>;
        default: number;
    };
}>> & {
    onReset?: ((...args: any[]) => any) | undefined;
    onSubmit?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    submit: (...args: any[]) => void;
    reset: (...args: any[]) => void;
}, string, {
    hasBtn: boolean;
    btnSpan: number;
}, {}, string, {}> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: Partial<Record<string, (_: {
        data: BaseFormItemType;
    }) => any>> & {
        btnPre?(_: {}): any;
        default?(_: {}): any;
    };
})> & Record<string, any>;

export declare const ABaseTable: SFCWithInstall<DefineComponent<Readonly<{
    data?: any;
    footerSummary?: any;
    fixedRows?: any;
    footData?: any;
    columns?: any;
    dataLoading?: any;
    pagination?: any;
    rowKey?: any;
    selectedRowKeys?: any;
    editableRowKeys?: any;
    tableRef?: any;
}>, {
    triggerRowValidate: (id: any) => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    change: (...args: any[]) => void;
    "page-change": (...args: any[]) => void;
    "select-change": (...args: any[]) => void;
    "row-edit": (...args: any[]) => void;
    "row-validate": (...args: any[]) => void;
    validate: (...args: any[]) => void;
    "cell-click": (...args: any[]) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<Readonly<{
    data?: any;
    footerSummary?: any;
    fixedRows?: any;
    footData?: any;
    columns?: any;
    dataLoading?: any;
    pagination?: any;
    rowKey?: any;
    selectedRowKeys?: any;
    editableRowKeys?: any;
    tableRef?: any;
}>>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onPage-change"?: ((...args: any[]) => any) | undefined;
    "onSelect-change"?: ((...args: any[]) => any) | undefined;
    "onRow-edit"?: ((...args: any[]) => any) | undefined;
    "onRow-validate"?: ((...args: any[]) => any) | undefined;
    onValidate?: ((...args: any[]) => any) | undefined;
    "onCell-click"?: ((...args: any[]) => any) | undefined;
}, {
    readonly data?: any;
    readonly footerSummary?: any;
    readonly fixedRows?: any;
    readonly footData?: any;
    readonly columns?: any;
    readonly dataLoading?: any;
    readonly pagination?: any;
    readonly rowKey?: any;
    readonly selectedRowKeys?: any;
    readonly editableRowKeys?: any;
    readonly tableRef?: any;
}, {}>> & Record<string, any>;

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

/**
 * 定义instance类型
 */
export declare type BaseBreadcrumbInstance = InstanceType<typeof _default_2>;

/**
 * 定义props类型
 */
export declare interface BaseBreadcrumbProps {
    /**
     * 面包屑的路由数据
     */
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

/**
 * 定义emit类型
 */
export declare type BaseTableEmits = {
    'page-change': [value: any];
    'change': [value: any];
    'select-change': [value: any];
    'row-edit': [value: any];
    'row-validate': [value: any];
    'validate': [value: any];
    'cell-click': [value: any];
};

/**
 * 定义emit类型
 */
export declare type BaseTableHeadEmits = {
    'openPage': [value: any];
};

/**
 * 定义instance类型
 */
export declare type BaseTableHeadInstance = InstanceType<typeof _default_3>;

/**
 * 定义props类型
 */
export declare interface BaseTableHeadProps {
    /**
     * 面包屑的路由数据
     */
    config: ConfigType;
}

/**
 * 定义instance类型
 */
export declare type BaseTableInstance = InstanceType<typeof _default_4>;

/**
 * 定义props类型
 */
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
    install: (app: App) => void;
};
export default _default;

declare const _default_2: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

declare const _default_3: __VLS_WithTemplateSlots_2<typeof __VLS_component_2, ReturnType<typeof __VLS_template_2>>;

declare const _default_4: DefineComponent<Readonly<{
    data?: any;
    footerSummary?: any;
    fixedRows?: any;
    footData?: any;
    columns?: any;
    dataLoading?: any;
    pagination?: any;
    rowKey?: any;
    selectedRowKeys?: any;
    editableRowKeys?: any;
    tableRef?: any;
}>, {
    triggerRowValidate: (id: any) => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    change: (...args: any[]) => void;
    "page-change": (...args: any[]) => void;
    "select-change": (...args: any[]) => void;
    "row-edit": (...args: any[]) => void;
    "row-validate": (...args: any[]) => void;
    validate: (...args: any[]) => void;
    "cell-click": (...args: any[]) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<Readonly<{
    data?: any;
    footerSummary?: any;
    fixedRows?: any;
    footData?: any;
    columns?: any;
    dataLoading?: any;
    pagination?: any;
    rowKey?: any;
    selectedRowKeys?: any;
    editableRowKeys?: any;
    tableRef?: any;
}>>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onPage-change"?: ((...args: any[]) => any) | undefined;
    "onSelect-change"?: ((...args: any[]) => any) | undefined;
    "onRow-edit"?: ((...args: any[]) => any) | undefined;
    "onRow-validate"?: ((...args: any[]) => any) | undefined;
    onValidate?: ((...args: any[]) => any) | undefined;
    "onCell-click"?: ((...args: any[]) => any) | undefined;
}, {
    readonly data?: any;
    readonly footerSummary?: any;
    readonly fixedRows?: any;
    readonly footData?: any;
    readonly columns?: any;
    readonly dataLoading?: any;
    readonly pagination?: any;
    readonly rowKey?: any;
    readonly selectedRowKeys?: any;
    readonly editableRowKeys?: any;
    readonly tableRef?: any;
}, {}>;

declare const _default_5: __VLS_WithTemplateSlots_3<typeof __VLS_component_3, ReturnType<typeof __VLS_template_3>>;

declare const _default_6: DefineComponent<__VLS_TypePropsToRuntimeProps_4<{
    modelValue?: any;
    typeValue?: any;
    config?: any;
}>, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (value: any) => void;
    "update:typeValue": (value: any) => void;
    change: (value: any) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<__VLS_TypePropsToRuntimeProps_4<{
    modelValue?: any;
    typeValue?: any;
    config?: any;
}>>> & {
    onChange?: ((value: any) => any) | undefined;
    "onUpdate:modelValue"?: ((value: any) => any) | undefined;
    "onUpdate:typeValue"?: ((value: any) => any) | undefined;
}, {}, {}>;

export declare type OperatorConfigItem = {
    name: string;
    pop?: {
        show: boolean;
        showType?: string;
    } & TdPopconfirmProps & DropdownOption;
    attrs?: TdLinkProps;
};

declare interface Props {
    list?: any[];
    isBack?: boolean;
    maxItemWidth?: string;
    mb?: number;
}

declare type Props_2 = {
    config: BaseFormItemType[];
    hasBtn?: boolean;
    btnBoxStyle?: any;
    btnSpan?: number;
};

declare type SFCWithInstall<T> = T & Plugin_2;

/**
 * 定义instance类型
 */
export declare type TBaseSearchBarInstance = InstanceType<typeof _default_5>;

/**
 * 定义props类型
 */
export declare interface TBaseSearchBarProps {
    config: BaseFormItemType[];
    hasBtn?: boolean;
    btnBoxStyle?: any;
    btnSpan?: number;
}

/**
 * 定义emit类型
 */
export declare type TBaseSearchBarPropsEmits = {
    'reset': [value: any];
    'submit': [value: any];
};

export { }

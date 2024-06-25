import { AllowedComponentProps } from 'vue';
import { App } from 'vue';
import { ComponentCustomProps } from 'vue';
import { ComponentOptionsBase } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { CreateComponentPublicInstance } from 'vue';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import { Plugin as Plugin_2 } from 'vue';
import { PropType } from 'vue';
import { PublicProps } from 'vue';
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

declare type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;

declare type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};

declare function __VLS_template(): {
    right?(_: {}): any;
};

declare type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable<T[K]>>;
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

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

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

declare const _default: {
    install: (app: App) => void;
};
export default _default;

declare const _default_2: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;

declare interface Props {
    list?: any[];
    isBack?: boolean;
    maxItemWidth?: string;
    mb?: number;
}

declare type SFCWithInstall<T> = T & Plugin_2;

export declare const TBaseBreadcrumb: SFCWithInstall<{
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

export { }

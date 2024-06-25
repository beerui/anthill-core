declare module 'vue' {
    export interface GlobalComponents {
        TBaseBreadcrumb: typeof import('@brewer/anthill-core')['TBaseBreadcrumb']
        TBaseTableHead: typeof import('@brewer/anthill-core')['TBaseTableHead']
        TBaseTable: typeof import('@brewer/anthill-core')['TBaseTable']
        TBaseSearchBar: typeof import('@brewer/anthill-core')['TBaseSearchBar']
    }

    interface ComponentCustomProperties {
    }
}


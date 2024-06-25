declare module 'vue' {
    export interface GlobalComponents {
        ABaseBreadcrumb: typeof import('@brewer/anthill-core')['ABaseBreadcrumb']
        ABaseTableHead: typeof import('@brewer/anthill-core')['ABaseTableHead']
        ABaseTable: typeof import('@brewer/anthill-core')['ABaseTable']
        ABaseSearchBar: typeof import('@brewer/anthill-core')['ABaseSearchBar']
    }

    interface ComponentCustomProperties {
    }
}


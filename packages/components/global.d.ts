declare module 'vue' {
    export interface GlobalComponents {
        TBaseBreadcrumb: typeof import('@brewer/anthill-core')['TBaseBreadcrumb']
    }
  
    interface ComponentCustomProperties {
    }
  }
  
  export {}
  
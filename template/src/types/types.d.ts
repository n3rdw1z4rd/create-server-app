declare namespace NodeJS {
    interface ProcessEnv {
        DEBUG?: string,
        APP_NAME?: string,
        HOST?: string,
        PORT?: string,
    }
}

declare type KeyValue = { [key: string]: any }

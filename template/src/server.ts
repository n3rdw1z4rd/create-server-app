import express from 'express';
import { createServer } from 'http';
import { TestPage } from './routes';

export interface ServerParams {
    debug?: boolean,
    appName: string,
    host: string,
    port: number,
}

export function StartServer(params: ServerParams) {
    const log = params.debug ? console.debug : () => { };

    log(`initializing ${params.appName}:`, params);

    const app = express();

    app.use(express.json());
    app.use('/', TestPage(params));

    const server = createServer(app);

    server.addListener('listening', () => {
        log(`🚀 ${params.appName} running on http://${params.host}:${params.port}`);
    });

    server.listen(params.port, params.host);
}

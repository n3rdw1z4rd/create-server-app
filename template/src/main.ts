import 'dotenv/config';
import { StartServer } from './server';

StartServer({
    debug: (process.env.DEBUG === 'true'),
    appName: process.env.APP_NAME ?? 'server',
    host: process.env.HOST ?? 'localhost',
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
});

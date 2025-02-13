import { Router } from 'express';
import { ServerParams } from '../server';

const routes = Router();

export const TestPage = (params: ServerParams) => routes.get('/', (req, res) => {
    const style = [
        'display: flex;',
        'width: 100%;',
        'height: 100%;',
        'justify-content: center;',
        'align-items: center;',
        'margin: 0;',
        'padding: 0;',
        'background-color: #222;',
        'color: #aaa',
    ];

    res.send(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="icon" type="image/svg+xml" href="#" />

            <style>
                * {
                    font: 14px monospace;
                }

                html {
                    color: var(--color-foreground);
                    background-color: var(--color-background);
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                }

                body {
                    width: 100%;
                    height: 100%;
                    margin: 0;
                    padding: 0;
                }
                
                .app-container {
                    display: flex;
                    width: 100%;
                    height: 100%;
                    justify-content: center;
                    align-items: center;
                    margin: 0;
                    padding: 0;
                    background-color: #222;
                    color: #aaa
                }
            </style>

            <title>${params.appName}</title>
        </head>
        <body style="width: 100%; height: 100%;">
            <div class="app-container">
                <div>
                    <p>Welcome to ${params.appName}!</p>
                    <p>created by create-server-app
                    <p>This page can be found in <code>src/routes/test-page.ts</code></p>
                </div>
            </div>
        </body>
    </html>`);
});

// @ts-ignore
import {Application} from 'https://deno.land/x/oak@v7.7.0/mod.ts';
// @ts-ignore
import {router as bookRouter} from './routes/books.route.ts';
// @ts-ignore
//import {Router} from 'https://deno.land/x/oak/mod.ts';


/* -------------------------------- App Configuration-------------------------------- */
const app = new Application();

app.use(bookRouter.routes());
app.use(bookRouter.allowedMethods());

const HOST: string = 'localhost';
const PORT: number = 6060;
console.debug(`Server running on ${HOST}:${PORT}`);
// @ts-ignore
await app.listen({port: PORT});

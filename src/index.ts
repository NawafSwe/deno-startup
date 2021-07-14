import {Application} from 'https://deno.land/x/oak@v7.7.0/mod.ts';
import {config} from "https://deno.land/x/dotenv/mod.ts";
import {router as bookRouter} from './routes/books.route.ts';
/* -------------------------------- App Configuration-------------------------------- */
const app = new Application();
app.use(bookRouter.routes());
app.use(bookRouter.allowedMethods());
// config env
const {HOST, PORT} = config({safe: true});
console.debug(`Server running on ${HOST}:${PORT}`);
await app.listen({port: Number(PORT)});

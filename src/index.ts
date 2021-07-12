// @ts-ignore
import {Application} from 'https://deno.land/x/oak@v7.7.0/mod.ts';
// @ts-ignore
import {router as bookRouter} from './routes/books.route.ts';
import {connectDB as connect} from './config/dbConnection.ts';

// @ts-ignore
import {config} from "https://deno.land/x/dotenv/mod.ts";

/* -------------------------------- App Configuration-------------------------------- */
const app = new Application();
app.use(bookRouter.routes());
app.use(bookRouter.allowedMethods());
// config env
const {HOST, PORT, DB_NAME, DB_URI} = config({safe: true});
console.debug(`Server running on ${HOST}:${PORT}`);
connect(DB_URI, DB_NAME);
// @ts-ignore
await app.listen({port: Number(PORT)});

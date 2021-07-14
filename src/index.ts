import {config} from "https://deno.land/x/dotenv/mod.ts";
import {opine, Request, Response, json} from "https://deno.land/x/opine@1.6.0/mod.ts";
import {router as bookRouter} from './routes/books.route.ts';
/* -------------------------------- App Configuration-------------------------------- */
const app = opine();
app.use(json());
app.get('/', (req: Request, res: Response) => {
    res.send('Backend working good');
});

// config env
const {HOST, PORT} = config({safe: true});

app.use('/books', bookRouter);
app.listen(Number(PORT), () => {
    console.debug(`Server Running on ${HOST}:${PORT}`);
});

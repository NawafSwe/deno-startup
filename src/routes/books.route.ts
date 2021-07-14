//@ts-ignore
import {Router} from 'https://deno.land/x/oak@v7.7.0/mod.ts';
const router = new Router();
import {getBooks} from '../controllers/books.controller/index.ts';

router.get('/books', getBooks);
export {router} ;

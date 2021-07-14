import {getBooks, createBook} from '../controllers/books.controller/index.ts';
import {Router} from "https://deno.land/x/opine@1.6.0/mod.ts";

const router = Router();
router.get('/', getBooks);
router.post('/', createBook);
export {router};

import {Books, IBook} from '../../models/Book.ts';
import {Request, Response} from 'https://deno.land/x/opine@1.6.0/mod.ts';

const getBooks = async (req: Request, res: Response, next: any): Promise<any | never> => {
    try {
        // returning all books
        // const books: Promise<IBook[]> | null = await Books.all();
        return res.json(await Books.all());
    } catch (error) {
        console.debug(`error occurred at <getBooks:fn>, error: ${error}`);
    }
};

export {getBooks};

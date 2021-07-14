import {Books, IBook} from '../../models/Book.ts';
import {Request, Response} from 'https://deno.land/x/opine@1.6.0/mod.ts';

export const createBook = async (req: Request, res: Response, next: any) => {
    try {
        const {body} = await req;
        const createBookResponse = await Books.create(body);
        return res.json({status: 201, message: 'Book created Successfully', statusText: 'Created'});
    } catch (error) {
        console.error(`error occurred in createBook controller, error: ${error}`);
        res.json({status: 500, message: 'internal Server Error', statusText: 'Internal Error'});
    }
};

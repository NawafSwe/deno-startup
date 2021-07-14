import {Books, IBook} from '../../models/Book.ts';

export const createBook = async (context: any) => {
    try {
        console.debug(JSON.stringify(context.request.body, null, 10));
        const createBookResponse = await Books.create(context.request.body);
        return (context.response.body = createBookResponse);
    } catch (error) {
        console.error(`error occurred in createBook controller, error: ${error}`);
    }
};

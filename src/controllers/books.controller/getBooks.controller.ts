import {Books, IBook} from '../../models/Book.ts';

const getBooks = async (context: any): Promise<any | never> => {
    try {
        // returning all books
        // const books: Promise<IBook[]> | null = await Books.all();
        return context.response.body = await Books.all();
    } catch (error) {
        console.debug(`error occurred at <getBooks:fn>, error: ${error}`);
    }
};

export {getBooks};

import {Books} from '../../models/Book.ts';

const getBooks = async (context: any) => {
    try {
        // returning all books
        return context.response.body = await Books.all();
    } catch (error) {
        console.debug(`error occurred at <getBooks:fn>, error: ${error}`);
    }
};

export {getBooks};

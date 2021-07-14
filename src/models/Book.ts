import {Model, DataTypes} from 'https://deno.land/x/denodb/mod.ts';
import db from "../config/dbConnection.ts";

export interface IBook {
    id: string;
    name: string;
    author: string;
    publishDate: string;
}

/* --------- define schema  --------- */
class Books extends Model {
    static timestamp = true;
    static table = 'books';
    static fields = {
        id: {type: DataTypes.INTEGER, primaryKey: true},
        name: DataTypes.STRING,
        author: DataTypes.STRING,
        publishDate: DataTypes.STRING
    };
}

db.sync();
db.link([Books]);

export {Books};

import {Database, MongoDBConnector} from 'https://deno.land/x/denodb/mod.ts';
import {config} from "https://deno.land/x/dotenv/mod.ts";

const dbConnection = () => {
    try {
        const {DB_NAME, DB_URI} = config({safe: true});
        const connector: MongoDBConnector = new MongoDBConnector({
            uri: DB_URI,
            database: DB_NAME,
        });
        const db = new Database({connector, debug: false});
        return db;
    } catch (error) {
        console.error(`error occurred while connecting to the db`);
    }
};

const db: Database | any = dbConnection();
export default db;


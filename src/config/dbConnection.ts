// @ts-ignore
import {Database, MongoDBConnector} from 'https://deno.land/x/denodb/mod.ts';

const connectDB = (uri: string, name: string) => {
    const connector: MongoDBConnector = new MongoDBConnector({
        uri: uri,
        database: name,
    });
    const database: Database = new Database(connector);
    console.debug(`connected to database successfully`);
};

export {connectDB};


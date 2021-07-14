import {config} from "https://deno.land/x/dotenv/mod.ts";
/* -------------------------------- App Configuration-------------------------------- */

// config env
const {HOST, PORT} = config({safe: true});
try {
    const server = Deno.listen({
        port: Number(PORT),
        hostname: HOST,
        transport: 'tcp'
    });
} catch (error) {
    console.error(`error occurred during establishing connection on ${HOST}:${PORT}, error: ${error}`);
}
console.debug(`Server running on ${HOST}:${PORT}`);

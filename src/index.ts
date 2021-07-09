import { serve } from "https://deno.land/std/http/server.ts";
const server = serve({port: 8080, hostname: 'localhost'});
// listing for incoming requests from clients 
for await (const req of server) {
    req.respond({ body: "Hello Deno!" });
  }

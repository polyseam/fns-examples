import { say } from "npm:cowsay/build/cowsay.es.js";

Deno.serve((req: Request): Response => {
  const { pathname } = new URL(req.url);

  if (pathname !== "/cowsay") {
    return new Response("Not Found", {
      status: 404,
    });
  }

  const query = new URL(req.url).searchParams;
  const text = query.get("message");

  if (!text || typeof text !== "string" || text.length === 0) {
    return new Response("Please provide a message", {
      status: 400,
    });
  }

  return new Response(say({ text }), {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
});

import { say } from "npm:cowsay";

Deno.serve((req) => {
  const { pathname } = new URL(req.url);
  if (pathname !== "/cowsay") {
    return new Response("Not Found", {
      status: 404,
    });
  }
  const query = new URL(req.url).searchParams;
  const message = query.get("message");

  if (!message || typeof message !== "string" || message.length === 0) {
    return new Response("Please provide a message", {
      status: 400,
    });
  } else {
    return new Response(say({ text: message }), {
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
});

import { STATUS_CODE } from "jsr:@std/http";

const greeting = Deno.env.get("GREETING") || "Hello";

Deno.serve((req) => {
  const { pathname } = new URL(req.url);

  if (!pathname.startsWith("/greet")) {
    return new Response("Not Found", {
      status: STATUS_CODE.NotFound,
    });
  }

  const who = pathname.split("/")?.[2] || "world";

  const text = `${greeting} ${who}!`;

  const result = {
    greeting: text,
  };

  return new Response(JSON.stringify(result), {
    headers: {
      "Content-Type": "application/json",
    },
    status: STATUS_CODE.OK,
  });
});

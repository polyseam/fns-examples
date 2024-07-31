import { render } from "npm:preact-render-to-string";
import Home from "./HomePage.tsx";

Deno.serve((_req) => {
  const html = render(Home({ title: "Your Home Page" }));

  const headers = new Headers({
    "Content-Type": "text/html",
    Connection: "keep-alive",
  });

  return new Response(html, {
    headers,
  });
});

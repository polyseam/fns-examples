/** @jsx h */
import { h } from "npm:preact";

type PageProps = {
  title: string;
};

export default function Home({ title }: PageProps) {
  return (
    <html>
      <head>
        <title>{title}</title>
      </head>
      <body>
        <h1>Hi there!</h1>
        <div>
          <p>This is a simple page built using Preact and CNDI Functions.</p>
          <p>
            It's built using the{" "}
            <a href="https://github.com/supabase/edge-runtime">
              Supabase Edge Runtime
            </a>
          </p>
          <p>
            Check out the function source code at{" "}
            <a href="https://github.com/polyseam/fns-examples">
              https://github.com/polyseam/fns-examples
            </a>
          </p>
          <p />
        </div>
      </body>
    </html>
  );
}

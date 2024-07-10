"use client";

import * as Sentry from "@sentry/nextjs";
import Error from "next/error";
import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({ error }: { error: unknown }) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html>
      <body>
        <Error statusCode={500} title="Error" />
        <h2>Something went wrong!</h2>
        <Link
          href="/"
          className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        >
          Go To Homepage
        </Link>
      </body>
    </html>
  );
}

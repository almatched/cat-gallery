"use client"; // Error components must be Client Components

import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <div className="flex justify-center items-center h-full w-full text-lg">
      <h2>Something went wrong! {error.message} </h2>
    </div>
  );
}

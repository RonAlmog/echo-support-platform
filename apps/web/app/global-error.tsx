"use client";
import React, { useEffect } from "react";
import * as Sentry from "@sentry/nextjs";

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  // Capture the exception on the client. Global error must be a Client
  // Component according to Next's app router. Using useEffect avoids
  // running browser-only code during render.
  useEffect(() => {
    try {
      Sentry.captureException(error);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Sentry capture failed:", err);
    }
  }, [error]);

  return (
    <div style={{ padding: 24 }}>
      <h1>Something went wrong.</h1>
      <pre style={{ whiteSpace: "pre-wrap" }}>
        {String(error?.message ?? "")}
      </pre>
    </div>
  );
}

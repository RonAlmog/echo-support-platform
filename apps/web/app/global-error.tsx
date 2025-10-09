"use client";

import React from "react";
import ErrorReporter from "@/components/error-reporter.client";

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <div style={{ padding: 24 }}>
      {/* Render client-side error reporter only on the client */}
      <ErrorReporter error={error ?? null} />
      <h1>Something went wrong.</h1>
      <pre style={{ whiteSpace: "pre-wrap" }}>
        {String(error?.message ?? "")}
      </pre>
    </div>
  );
}

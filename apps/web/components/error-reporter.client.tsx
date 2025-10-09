"use client";

import { useEffect } from "react";
import * as Sentry from "@sentry/nextjs";

export default function ErrorReporter({ error }: { error: Error | null }) {
  useEffect(() => {
    if (!error) return;
    try {
      Sentry.captureException(error);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Sentry capture failed:", err);
    }
  }, [error]);

  return null;
}

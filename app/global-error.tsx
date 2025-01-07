"use client";

import NextError from "next/error";
import { useEffect } from "react";

export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
  useEffect(() => {
    // Log the error to the console
    console.error("Global Error:", error);
  }, [error]);

  return (
    <html>
      <body>
        {/* NextError is the default Next.js error page component. */}
        <NextError statusCode={0} />
      </body>
    </html>
  );
}

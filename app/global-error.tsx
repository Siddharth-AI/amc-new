"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#faf9f6",
          color: "#14181c",
          fontFamily: "system-ui, sans-serif",
        }}>
        <div style={{ textAlign: "center", padding: "2rem", maxWidth: 480 }}>
          <h2 style={{ fontSize: "1.75rem", color: "#1e3358", marginBottom: "0.5rem" }}>
            Something went wrong
          </h2>
          <p style={{ color: "#5a6472", marginBottom: "1.5rem" }}>
            An unexpected error occurred. Please try again.
          </p>
          <button
            onClick={() => reset()}
            style={{
              background: "#16a5a3",
              color: "#fff",
              border: "none",
              borderRadius: 9999,
              padding: "0.75rem 1.75rem",
              fontSize: "0.95rem",
              fontWeight: 600,
              cursor: "pointer",
            }}>
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}

"use client";

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "12px",
                textAlign: "center",
            }}
        >
            <h1>Something went wrong</h1>
            <p>{error.message}</p>
            <button onClick={reset}>Try again</button>
        </div>
    );
}

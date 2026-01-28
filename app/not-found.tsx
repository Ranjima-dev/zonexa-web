import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
            <h1 className="text-7xl font-bold tracking-tight">404</h1>

            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Sorry, the page you are looking for doesn’t exist.
            </p>

            <Link
                href="/"
                className="mt-8 inline-flex items-center rounded-md border border-gray-300 px-5 py-2.5 text-sm font-medium transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
            >
                Go back home
            </Link>
        </main>
    );
}

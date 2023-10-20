"use client";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-24 py-12">
      <div className="z-10 max-w-5xl w-full items-center justify-between lg:flex">
        <h2 className="text-3xl">UX Resources</h2>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://www.linkedin.com/in/rico-robinson/"
            target="_blank"
            rel="noopener noreferrer">
            By Rico Robinson
          </a>
        </div>
      </div>
    </main>
  );
}

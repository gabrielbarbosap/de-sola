import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-emerald-800/30 bg-emerald-950/95 backdrop-blur supports-[backdrop-filter]:bg-emerald-950/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-white transition-opacity hover:opacity-90"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500 text-emerald-950">
            DS
          </span>
          <span className="text-xl tracking-tight">De Sola FC News</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-emerald-100 transition-colors hover:text-white"
          >
            Notícias
          </Link>
        </div>
      </nav>
    </header>
  );
}

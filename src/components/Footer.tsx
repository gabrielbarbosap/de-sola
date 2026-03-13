import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-emerald-800/30 bg-emerald-950 text-emerald-100">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-lg font-bold text-emerald-950">
              DS
            </span>
            <span className="text-lg font-semibold text-white">
              De Sola FC News
            </span>
          </div>

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
            <Link
              href="/"
              className="text-sm text-emerald-200 transition-colors hover:text-white"
            >
              Início
            </Link>
            <Link
              href="/"
              className="text-sm text-emerald-200 transition-colors hover:text-white"
            >
              Notícias
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-emerald-800/30 pt-8">
          <p className="text-center text-sm text-emerald-300/80">
            © {currentYear} De Sola FC News. Todas as notícias do nosso clube do
            coração.
          </p>
        </div>
      </div>
    </footer>
  );
}

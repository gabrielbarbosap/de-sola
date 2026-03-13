import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/90 pt-[env(safe-area-inset-top)]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-3 py-2 sm:px-6 sm:py-3 lg:px-8">
        <Link
          href="/"
          className="flex min-w-0 flex-shrink-0 items-center gap-2 transition-opacity hover:opacity-90 sm:gap-3"
        >
          <Image
            src="/OIP.jpg"
            alt="De Sola FC"
            width={48}
            height={48}
            className="h-9 w-9 shrink-0 rounded object-contain sm:h-12 sm:w-12"
          />
          <span className="truncate text-base font-bold tracking-tight text-yellow-400 sm:text-xl">
            De Sola FC News
          </span>
        </Link>

        <div className="flex shrink-0 items-center gap-4 sm:gap-6">
          <Link
            href="/"
            className="rounded-lg px-3 py-2 text-sm font-medium text-yellow-100/90 transition-colors hover:bg-yellow-500/10 hover:text-yellow-400 active:bg-yellow-500/20"
          >
            Notícias
          </Link>
        </div>
      </nav>
    </header>
  );
}

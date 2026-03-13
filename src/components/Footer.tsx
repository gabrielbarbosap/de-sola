import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-yellow-500/20 bg-black text-yellow-100 pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto max-w-6xl px-3 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="flex flex-col gap-6 sm:gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/OIP.jpg"
              alt="De Sola FC"
              width={40}
              height={40}
              className="h-8 w-8 shrink-0 rounded object-contain sm:h-10 sm:w-10"
            />
            <span className="text-base font-semibold text-yellow-400 sm:text-lg">
              De Sola FC News
            </span>
          </div>

          <div className="flex flex-wrap gap-4 sm:gap-8">
            <Link
              href="/"
              className="min-h-[44px] rounded-lg px-3 py-2 text-sm text-yellow-200/80 transition-colors hover:text-yellow-400 active:bg-yellow-500/10"
            >
              Início
            </Link>
            <Link
              href="/"
              className="min-h-[44px] rounded-lg px-3 py-2 text-sm text-yellow-200/80 transition-colors hover:text-yellow-400 active:bg-yellow-500/10"
            >
              Notícias
            </Link>
          </div>
        </div>

        <div className="mt-6 border-t border-yellow-500/20 pt-6 sm:mt-8 sm:pt-8">
          <p className="text-center text-xs text-yellow-200/70 sm:text-sm">
            © {currentYear} De Sola FC News. Todas as notícias do nosso clube do
            coração.
          </p>
          <p className="mt-3 text-center text-xs leading-relaxed text-yellow-500/80 sm:mt-4 sm:max-w-2xl sm:mx-auto">
            Este é um portal de notícias de um time fictício. Nada aqui retratado
            existe na vida real — todas as pessoas, eventos e situações são
            fictícios e criados apenas para fins de entretenimento.
          </p>
        </div>
      </div>
    </footer>
  );
}

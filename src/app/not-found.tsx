import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
      <h1 className="mb-2 text-4xl font-bold text-emerald-950">404</h1>
      <p className="mb-6 text-center text-emerald-800/80">
        A notícia que você procura não foi encontrada.
      </p>
      <Link
        href="/"
        className="rounded-lg bg-emerald-600 px-6 py-3 font-medium text-white transition-colors hover:bg-emerald-700"
      >
        Voltar ao início
      </Link>
    </div>
  );
}

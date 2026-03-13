import type { Metadata } from "next";
import { posts } from "@/data/posts";
import { PostList } from "@/components/PostList";

export const metadata: Metadata = {
  title: "Últimas Notícias",
  description:
    "As últimas notícias do De Sola FC. Resultados, contratações, entrevistas e tudo sobre o nosso clube.",
};

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-10">
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-emerald-950 sm:text-4xl lg:text-5xl">
          Últimas Notícias
        </h1>
        <p className="text-lg text-emerald-800/80">
          Tudo sobre o De Sola FC em um só lugar
        </p>
      </header>

      <PostList posts={posts} />
    </div>
  );
}

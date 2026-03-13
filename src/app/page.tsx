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
    <div className="mx-auto max-w-6xl px-3 py-6 sm:px-6 sm:py-8 lg:px-8">
      <header className="mb-6 sm:mb-10">
        <h1 className="mb-1.5 text-2xl font-bold tracking-tight text-black sm:mb-2 sm:text-4xl lg:text-5xl">
          Últimas Notícias
        </h1>
        <p className="text-base text-neutral-700 sm:text-lg">
          Tudo sobre o De Sola FC em um só lugar
        </p>
      </header>

      <PostList posts={posts} />
    </div>
  );
}

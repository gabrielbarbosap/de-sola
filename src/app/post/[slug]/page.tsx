import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { getPostBySlug, getAllSlugs } from "@/data/posts";
import { ArticleContent } from "@/components/ArticleContent";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post não encontrado" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-3 py-6 sm:px-6 sm:py-8 lg:px-8">
      <Link
        href="/"
        className="mb-6 inline-flex min-h-[44px] items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-yellow-600 transition-colors hover:bg-yellow-500/10 hover:text-yellow-700 active:bg-yellow-500/20 sm:mb-8"
      >
        ← Voltar para as notícias
      </Link>

      <header className="mb-6 sm:mb-8">
        <time
          dateTime={post.date}
          className="mb-2 block text-sm font-medium uppercase tracking-wider text-yellow-600 sm:mb-3"
        >
          {formatDate(post.date)}
        </time>

        <h1 className="mb-3 text-2xl font-bold leading-tight text-black sm:mb-4 sm:text-4xl lg:text-5xl">
          {post.title}
        </h1>

        <p className="text-sm text-neutral-700 sm:text-base">Por {post.author}</p>
      </header>

      <div className="relative -mx-3 mb-8 aspect-video overflow-hidden bg-yellow-100 sm:mx-0 sm:mb-10 sm:rounded-xl">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </div>

      <ArticleContent content={post.content} />
    </article>
  );
}

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
    <article className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-emerald-600 transition-colors hover:text-emerald-700"
      >
        ← Voltar para as notícias
      </Link>

      <header className="mb-8">
        <time
          dateTime={post.date}
          className="mb-3 block text-sm font-medium uppercase tracking-wider text-emerald-600"
        >
          {formatDate(post.date)}
        </time>

        <h1 className="mb-4 text-3xl font-bold leading-tight text-emerald-950 sm:text-4xl lg:text-5xl">
          {post.title}
        </h1>

        <p className="text-emerald-700">Por {post.author}</p>
      </header>

      <div className="relative mb-10 aspect-video overflow-hidden rounded-xl bg-emerald-100">
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

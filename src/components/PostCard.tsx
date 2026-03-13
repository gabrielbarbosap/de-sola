import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/types/post";

interface PostCardProps {
  post: Post;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/post/${post.slug}`}>
      <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-black/10 bg-white shadow-sm transition-all duration-300 hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-500/10 sm:rounded-xl">
        <div className="relative aspect-[16/10] overflow-hidden bg-yellow-100">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        <div className="flex flex-1 flex-col p-4 sm:p-5">
          <time
            dateTime={post.date}
            className="mb-1.5 text-xs font-medium uppercase tracking-wider text-yellow-600 sm:mb-2"
          >
            {formatDate(post.date)}
          </time>

          <h2 className="mb-2 line-clamp-2 text-base font-bold leading-tight text-black transition-colors group-hover:text-yellow-600 sm:text-lg">
            {post.title}
          </h2>

          <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-neutral-700">
            {post.excerpt}
          </p>
        </div>
      </article>
    </Link>
  );
}

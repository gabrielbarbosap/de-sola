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
      <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-emerald-800/20 bg-white shadow-sm transition-all duration-300 hover:border-emerald-600/40 hover:shadow-lg hover:shadow-emerald-950/5">
        <div className="relative aspect-[16/10] overflow-hidden bg-emerald-100">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        <div className="flex flex-1 flex-col p-5">
          <time
            dateTime={post.date}
            className="mb-2 text-xs font-medium uppercase tracking-wider text-emerald-600"
          >
            {formatDate(post.date)}
          </time>

          <h2 className="mb-2 line-clamp-2 text-lg font-bold leading-tight text-emerald-950 transition-colors group-hover:text-emerald-700">
            {post.title}
          </h2>

          <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-emerald-800/80">
            {post.excerpt}
          </p>
        </div>
      </article>
    </Link>
  );
}

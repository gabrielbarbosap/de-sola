interface ArticleContentProps {
  content: string;
}

export function ArticleContent({ content }: ArticleContentProps) {
  return (
    <div
      className="article-content [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:border-b [&_h2]:border-emerald-200 [&_h2]:pb-2 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-emerald-950 [&_h3]:mb-3 [&_h3]:mt-6 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-emerald-950 [&_p]:mb-4 [&_p]:leading-relaxed [&_p]:text-emerald-900/90 [&_a]:text-emerald-600 [&_a]:underline [&_a:hover]:text-emerald-700"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

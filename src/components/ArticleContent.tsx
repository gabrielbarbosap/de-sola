interface ArticleContentProps {
  content: string;
}

export function ArticleContent({ content }: ArticleContentProps) {
  return (
    <div
      className="article-content overflow-x-auto [&_h2]:mb-4 [&_h2]:mt-8 [&_h2]:border-b [&_h2]:border-yellow-200 [&_h2]:pb-2 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-black [&_h3]:mb-3 [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-black [&_p]:mb-4 [&_p]:leading-relaxed [&_p]:text-neutral-800 [&_p]:text-[15px] [&_a]:text-yellow-600 [&_a]:underline [&_a:hover]:text-yellow-700 sm:[&_h2]:mt-10 sm:[&_h2]:text-2xl sm:[&_h3]:text-xl sm:[&_p]:text-base"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

import Image from "next/image";

interface ArticleImage {
  type: "image";
  url: string;
  width?: number;
  height?: number;
  caption?: string | null;
  altText?: string | null;
  copyrightHolder?: string | null;
}

interface ArticleText {
  type: "text" | "subheading";
  text: string;
}

type ArticleBlock = ArticleImage | ArticleText;

interface ArticleTopic {
  id: string;
  name: string;
}

interface ArticleAuthor {
  name: string;
  role?: string | null;
}

interface Article {
  id: string;
  title: string;
  description?: {
    blocks?: {
      model?: {
        blocks?: {
          model?: {
            text?: string;
          };
        }[];
      };
    }[];
  };
  link?: string;
  firstPublished?: string;
  lastPublished?: string;
  byline?: ArticleAuthor[];
  topics?: ArticleTopic[];
  tags?: string[];
  imageUrl?: string;
  body?: ArticleBlock[];
  source?: string;
  sourceUrl?: string;
  text?: string;
  wordCount?: number;
}

interface ArticleApiResponse {
  success: boolean;
  data: Article;
}

const NewsDetails = async ({
  params,
}: {
  params: Promise<{ newsId: string }>;
}) => {
  const { newsId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsId}`,
    { next: { revalidate: 300 } },
  );

  if (!res.ok) {
    throw new Error("Failed to load article");
  }

  const result: ArticleApiResponse = await res.json();
  const news = result.data;

  if (!result.success || !news) {
    throw new Error("Article not found");
  }

  const coverImage =
    news.imageUrl || news.body?.find((item) => item.type === "image")?.url;

  const description =
    news.description?.blocks?.[0]?.model?.blocks?.[0]?.model?.text;

  const publishedDate = news.firstPublished
    ? new Date(news.firstPublished)
    : null;

  return (
    <main className="min-h-screen bg-[#f7f7f7] px-3 py-5 sm:px-6 sm:py-8">
      <article className="mx-auto w-full max-w-180 bg-white px-4 py-5 sm:px-8 sm:py-8">
        {/* Article Header */}
        <header className="border-b border-gray-200 pb-4">
          {news.topics?.[0] && (
            <p className="mb-3 text-xs font-bold text-[#b80000]">
              {news.topics[0].name}
            </p>
          )}

          <h1 className="text-[25px] font-bold leading-[1.55] tracking-tight text-[#202124] sm:text-[32px] sm:leading-[1.4]">
            {news.title}
          </h1>

          {description && (
            <p className="mt-3 text-[15px] leading-[1.9] text-[#555] sm:text-base">
              {description}
            </p>
          )}

          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-gray-500 sm:text-xs">
            {news.byline?.[0]?.name && (
              <>
                <span>{news.byline[0].name}</span>
                <span>•</span>
              </>
            )}

            {publishedDate && (
              <>
                <time dateTime={news.firstPublished}>
                  {publishedDate.toLocaleDateString("bn-BD", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
                <span>•</span>
              </>
            )}

            <span>{news.source || "BBC বাংলা"}</span>
          </div>
        </header>

        {/* Cover Image */}
        {coverImage && (
          <figure className="mt-5">
            <Image
              src={coverImage}
              alt={news.title}
              width={1200}
              height={675}
              unoptimized
              priority
              sizes="(max-width: 768px) 100vw, 720px"
              className="h-auto max-h-112.5 w-full rounded-md object-cover"
            />

            <figcaption className="mt-1.5 text-[11px] leading-5 text-gray-500">
              {news.title}
            </figcaption>
          </figure>
        )}

        {/* Dynamic Article Content */}
        <div className="mt-5 space-y-5 text-[15px] leading-[1.95] text-[#292929] sm:text-base">
          {news.body?.map((item, index) => {
            if (item.type === "image") {
              // Skip the cover image if it is repeated in the body.
              if (item.url === coverImage) {
                return null;
              }

              return (
                <figure key={`image-${index}`} className="my-7">
                  <Image
                    src={item.url}
                    alt={item.altText || news.title}
                    width={item.width || 1200}
                    height={item.height || 675}
                    unoptimized
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 720px"
                    className="h-auto w-full rounded-md object-cover"
                  />

                  {(item.caption || item.altText || item.copyrightHolder) && (
                    <figcaption className="mt-1.5 text-[11px] leading-5 text-gray-500">
                      {item.caption || item.altText}
                      {item.copyrightHolder && ` (${item.copyrightHolder})`}
                    </figcaption>
                  )}
                </figure>
              );
            }

            if (item.type === "subheading") {
              return (
                <h2
                  key={`heading-${index}`}
                  className="mb-1 mt-8 text-xl font-bold leading-snug text-[#202124] sm:text-2xl"
                >
                  {item.text}
                </h2>
              );
            }

            if (item.type === "text") {
              return item.text
                .split(/\n\s*\n/)
                .filter((paragraph) => paragraph.trim())
                .map((paragraph, paragraphIndex) => (
                  <p key={`paragraph-${index}-${paragraphIndex}`}>
                    {paragraph.trim()}
                  </p>
                ));
            }

            return null;
          })}
        </div>

        {/* Article Topics */}
        {((news.tags?.length ?? 0) > 0 || (news.topics?.length ?? 0) > 0) && (
          <footer className="mt-8 border-t border-gray-200 pt-5">
            <h3 className="mb-3 text-sm font-bold text-gray-800">বিষয়</h3>

            <div className="flex flex-wrap gap-2">
              {(news.tags?.length
                ? news.tags
                : news.topics?.map((topic) => topic.name) || []
              ).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-gray-200 px-3 py-1.5 text-xs text-gray-600 transition hover:bg-gray-50"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="mt-5 text-xs text-gray-500">
              সূত্র: {news.source || "BBC বাংলা"}
            </p>

            {(news.link || news.sourceUrl) && (
              <a
                href={news.link || news.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm font-medium text-[#b80000] hover:underline"
              >
                মূল প্রতিবেদন পড়ুন ↗
              </a>
            )}
          </footer>
        )}
      </article>
    </main>
  );
};

export default NewsDetails;

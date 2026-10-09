interface MostReadNewsItem {
  id: string;
  title: string;
}

const MostReadNews = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read", {
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch most-read news.");
  }

  const data: { data: MostReadNewsItem[] } = await res.json();
  const mostReadNews = data.data ?? [];

  return (
    <aside className="h-fit w-full overflow-hidden rounded-xl border border-base-200 bg-base-100 shadow-sm">
      {/* Header */}
      <div className="border-b border-base-200 px-4 py-4 sm:px-5">
        <div className="flex items-center gap-3">
          <span className="h-6 w-1 rounded-full bg-red-600" />
          <h2 className="text-lg font-bold text-base-content sm:text-xl">
            সর্বাধিক পঠিত
          </h2>
        </div>
        <p className="mt-1 pl-4 text-xs text-base-content/60 sm:text-sm">
          পাঠকদের পছন্দের খবর
        </p>
      </div>

      {/* News List */}
      {mostReadNews.length > 0 ? (
        <ol className="divide-y divide-base-200">
          {mostReadNews.map((news, index) => (
            <li key={news.id}>
              <article className="group flex gap-3 px-4 py-4 transition-colors duration-200 hover:bg-base-200/50 sm:gap-4 sm:px-5">
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-extrabold sm:h-9 sm:w-9 bg-red-50 text-red-600  `}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="min-w-0 flex-1 text-sm font-semibold leading-6 text-base-content transition-colors group-hover:text-red-600 sm:text-base">
                  {news.title}
                </h3>
              </article>
            </li>
          ))}
        </ol>
      ) : (
        <p className="px-4 py-6 text-sm text-base-content/60 sm:px-5">
          এই মুহূর্তে কোনো খবর পাওয়া যায়নি।
        </p>
      )}
    </aside>
  );
};

export default MostReadNews;

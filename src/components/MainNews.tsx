import Link from "next/link";
import NewsCard from "./NewsCard";

interface MainNewsProps {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
  lastPublished: string;
}

const MainNews = ({ news }: { news: MainNewsProps[] }) => {
  const [firstNews, ...others] = news;

  if (!firstNews) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      {/* Featured News */}
      <div className="min-w-0 w-full lg:w-3/5">
        {/* <Link href={`/news/${firstNews.id}`}> */}
        <NewsCard news={firstNews} />
        {/* </Link> */}
      </div>
      {/* Other Top News */}
      <div className="flex min-w-0 w-full flex-col gap-3 lg:w-2/5">
        {others.slice(0, 4).map((otherNews) => (
          <Link key={otherNews.id} href={`/news/${otherNews.id}`}>
            <article className="card bg-base-100 rounded-lg border border-base-200 p-4 shadow-sm transition-shadow hover:shadow-md sm:p-5">
              <h4 className="mb-2 text-xs font-bold uppercase text-red-700 sm:text-sm">
                {otherNews.category}
              </h4>

              <p className="text-sm font-semibold leading-relaxed text-neutral-800 sm:text-base">
                {otherNews.title}
              </p>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainNews;

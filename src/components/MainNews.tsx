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

  return (
    <div className="flex gap-4">
      <NewsCard news={firstNews} />
      <div className="flex flex-col gap-4 max-h-full">
        {others.slice(1, 5).map((otherNews) => {
          return (
            <div
              className="card bg-base-100 shadow-sm py-5 px-3"
              key={otherNews.id}
            >
              <h4 className="text-sm font-bold text-red-700 mb-3">
                {otherNews.category}
              </h4>
              <p>{otherNews.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainNews;

import Image from "next/image";
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
  const date = new Date(firstNews.lastPublished).toLocaleDateString("bn-Bd", {
    dateStyle: "full",
  });
  return (
    <div className="flex gap-4">
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <Image
            width={400}
            height={200}
            src={firstNews.imageUrl}
            alt={firstNews.imageAlt}
          />
        </figure>
        <div className="card-body">
          <h4 className="text-md font-bold text-red-700">
            {firstNews.category}
          </h4>
          <h2 className="card-title">{firstNews.title}</h2>
          <p>{firstNews.description}</p>

          <p className="text-sm text-neutral-500">{date}</p>
        </div>
      </div>
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

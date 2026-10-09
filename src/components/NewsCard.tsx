import Image from "next/image";
interface NewsCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
  lastPublished: string;
}

const NewsCard = ({ news }: { news: NewsCardProps }) => {
  const date = new Date(news.lastPublished).toLocaleDateString("bn-Bd", {
    dateStyle: "full",
  });

  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <Image
            width={400}
            height={200}
            src={news.imageUrl}
            alt={news.imageAlt}
          />
        </figure>
        <div className="card-body">
          <h4 className="text-md font-bold text-red-700">{news.category}</h4>
          <h2 className="card-title">{news.title}</h2>
          <p>
            {news.description?.length > 100
              ? `${news.description.substring(0, 100)}...`
              : news.description}
          </p>

          <p className="text-sm text-neutral-500">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

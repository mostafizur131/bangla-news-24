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
  const date = new Date(news.lastPublished).toLocaleDateString("bn-BD", {
    dateStyle: "long",
  });

  return (
    <article className="card h-full w-full min-w-0 overflow-hidden rounded-lg bg-base-100 shadow-sm transition-shadow duration-300 hover:shadow-md">
      {/* News Image */}
      <figure className="relative aspect-video w-full overflow-hidden">
        <Image
          src={news.imageUrl}
          alt={news.imageAlt}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </figure>

      {/* News Content */}
      <div className="card-body gap-2 p-3 sm:gap-3 sm:p-4 lg:p-5">
        <h4 className="text-xs font-bold uppercase text-red-700 sm:text-sm">
          {news.category}
        </h4>

        <h2 className="card-title line-clamp-3 text-base leading-snug sm:text-lg">
          {news.title}
        </h2>

        <p className="line-clamp-3 text-sm leading-relaxed text-base-content/80 sm:text-base">
          {news.description}
        </p>

        <p className="mt-1 text-xs text-neutral-500 sm:text-sm">{date}</p>
      </div>
    </article>
  );
};

export default NewsCard;

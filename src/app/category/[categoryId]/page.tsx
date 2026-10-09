import NewsCard from "@/components/NewsCard";

interface CategoryNewsParams {
  categoryId: string;
}

interface NewsArticle {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
  lastPublished: string;
}

interface CategoryNewsResponse {
  title: string;
  data: NewsArticle[];
}

interface CategoryNewsProps {
  params: Promise<CategoryNewsParams>;
}

const CategoryNews = async ({ params }: CategoryNewsProps) => {
  const { categoryId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${categoryId}`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch category news.");
  }

  const result: CategoryNewsResponse = await res.json();
  const categoryNews = result.data ?? [];

  return (
    <div className="mx-auto w-full max-w-7xl">
      <h2 className="my-4 border-b-2 border-red-700 pb-2 text-lg font-bold text-neutral-800 sm:text-xl">
        {result.title}
      </h2>

      {categoryNews.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categoryNews.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      ) : (
        <p className="py-8 text-center text-base-content/60">
          এই বিভাগে কোনো খবর পাওয়া যায়নি।
        </p>
      )}
    </div>
  );
};

export default CategoryNews;

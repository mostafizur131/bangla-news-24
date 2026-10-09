import MainNews from "@/components/MainNews";
import MostReadNews from "@/components/MostReadNews";
import NewsCard from "@/components/NewsCard";

interface ISectionNews {
  curationId: string;
  title: string;
  articles: {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string;
    lastPublished: string;
  }[];
}

export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");

  const data = await res.json();
  const sections: ISectionNews[] = data.data;

  const mainNews = sections[0]?.articles ?? [];
  const otherSections = sections.slice(1);

  return (
    <div className="w-full">
      <main className="mt-4 w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Main News Section */}
          <section className="min-w-0 lg:col-span-2">
            <MainNews news={mainNews} />

            <div className="mt-6">
              {otherSections.map((section) => (
                <section key={section.curationId} className="mb-8">
                  <h2 className="my-4 border-b-2 border-red-700 pb-2 text-lg font-bold text-neutral-800 sm:text-xl">
                    {section.title}
                  </h2>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {section.articles.map((news) => (
                      <article key={news.id} className="min-w-0">
                        <NewsCard news={news} />
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </section>

          {/* Most Read Section */}
          <aside className="min-w-0 lg:col-span-1">
            <MostReadNews />
          </aside>
        </div>
      </main>
    </div>
  );
}

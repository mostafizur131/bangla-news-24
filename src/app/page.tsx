import MainNews from "@/components/MainNews";
import Marquee from "@/components/Marquee";
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
  const mainNews = sections[0].articles;
  const otherSections = sections.slice(1);

  return (
    <div>
      <Marquee />

      <div className="grid grid-cols-3 max-w-7xl mx-auto gap-4 mt-4">
        {/* Main News Section */}
        <div className="col-span-2">
          <MainNews news={mainNews} />
          <>
            <div className="mt-5">
              {otherSections.map((section) => (
                <div key={section.curationId}>
                  <h2 className="text-xl font-bold text-neutral-800 border-b-2 border-red-700 my-4  pb-2">
                    {section.title}
                  </h2>
                  <div className="grid grid-cols-3 gap-4">
                    {section.articles.map((news) => (
                      <div key={news.id} className="mb-4">
                        <NewsCard news={news} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        </div>
        {/* Most Read Section */}
        <div className="col-span-1"></div>
      </div>
    </div>
  );
}

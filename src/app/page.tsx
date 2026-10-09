import MainNews from "@/components/MainNews";
import Marquee from "@/components/Marquee";
import Image from "next/image";

export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const sections = data.data;
  const mainNews = sections[0].articles;

  return (
    <div>
      <Marquee />

      <div className="grid grid-cols-3 max-w-7xl mx-auto gap-4 mt-4">
        {/* Main News Section */}
        <div className="col-span-2">
          <MainNews news={mainNews} />
        </div>
        {/* Most Read Section */}
        <div className="col-span-1"></div>
      </div>
    </div>
  );
}

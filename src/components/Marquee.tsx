import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface IHeadline {
  id: string;
  title: string;
  url: string;
}

const Marquee = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");
  const data = await res.json();
  const headlines: IHeadline[] = data.data;

  return (
    <div className=" bg-red-700 text-md font-semibold text-white">
      <div className="flex max-w-7xl mx-auto  items-center">
        <p className="bg-red-900 font-bold py-2 px-5">সর্বশেষ</p>
        <MarqueeText direction="right" duration={10}>
          {headlines.map((headline) => (
            <p key={headline.id}>
              <span>{headline.title}</span>
              <span className="mx-2">•</span>
            </p>
          ))}
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marquee;

import Link from "next/link";
interface INavs {
  scrapable: boolean;
  slug: string;
  title: string;
  topicId: string;
  url: string;
}

const NavLinks = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories");
  const data = await res.json();
  const navs: INavs[] = data.data.filter((nav: INavs) => nav.scrapable);

  return (
    <div className="flex justify-center gap-5 mb-2">
      <Link className="text-sm text-neutral-700 hover:text-red-700" href={"/"}>
        হোম
      </Link>
      {navs.map((nav, id) => (
        <Link
          className="text-sm text-neutral-700 hover:text-red-700"
          href={`/category/${nav.slug}`}
          key={id}
        >
          {nav.title}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;

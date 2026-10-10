import NavLinks from "./NavLinks";

interface INavs {
  scrapable: boolean;
  slug: string;
  title: string;
  topicId: string;
  url: string;
}

const NavLinksWrapper = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories");

  if (!res.ok) {
    throw new Error("Failed to fetch categories.");
  }

  const data = await res.json();

  const navs: INavs[] = data.data.filter((nav: INavs) => nav.scrapable);

  return <NavLinks navs={navs} />;
};

export default NavLinksWrapper;

import fetchNews from "@/lib/fetchNews";
import NewsList from "../components/general/NewsList";

type Props = {
  searchParams?: { term: string };
};

const searchPage = async ({ searchParams }: Props) => {
  const news: NewsResponse = await fetchNews(
    "general",
    searchParams?.term,
    true
  );
  return (
    <div>
      <h1 className="headerTitle">Search Results For: {searchParams?.term}</h1>
      <NewsList news={news} />
    </div>
  );
};

export default searchPage;

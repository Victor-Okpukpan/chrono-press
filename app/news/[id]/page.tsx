import NewsList from "@/app/components/general/NewsList";
import { categories } from "@/constants";
import fetchNews from "@/lib/fetchNews";

type Props = {
  params: { id: Category };
};
const NewsCategory = async ({ params: { id } }: Props) => {
  const news: NewsResponse = await fetchNews(id);
  return (
    <div>
      <h1 className="headerTitle">{id}</h1>
      <NewsList news={news} />
    </div>
  );
};

export default NewsCategory;

export async function generateStaticParams() {
  return categories.map((category) => ({
    id: category,
  }));
}

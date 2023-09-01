import { categories } from "@/constants"
import fetchNews from "@/lib/fetchNews"
import NewsList from "./components/header/NewsList";


export default async function Home() {
  const news: NewsResponse = await fetchNews(categories.join(","));
  return (
    <main>
      <NewsList news={news} />
    </main>
  )
}

//stepzen import curl http://api.mediastack.com/v1/news?access_key=5bd879b35371578810d3ef9a1a12c7c5&sources=general,business,entertainment,health,science,sports,technology

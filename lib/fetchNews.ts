import { gql } from "graphql-request"
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (
    category?: Category | string,
    keywords?: string,
    isDynamic?: boolean
) => {
    //GraphQL query
    const query = gql`
    query myQuery(
        $access_key: String!
        $categories: String!
        $keywords: String
    ){
        myQuery(
            access_key: $access_key
            categories: $categories
            countries: "gb"
            sort: "published_desc"
            keywords: $keywords
        ){
            data{
                author
                category
                country
                description
                image
                language
                published_at
                source
                title
                url
            }
            pagination{
                count
                limit
                offset
                total
            }
        }
    }
    `
    
    //fetch function with Next.js 13
    const res = await fetch("https://merrifield.stepzen.net/api/voting-chicken/__graphql", {
        method: "POST",
        cache: isDynamic ? "no-cache" : "default",
        next: isDynamic ? { revalidate: 0 } : { revalidate: 30 },
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Apikey ${process.env.STEPZEN_API_KEY}`
        },
        body: JSON.stringify({
            query,
            variables: {
                access_key: process.env.MEDIASTACK_API_KEY,
                categories: category,
                keywords: keywords
            }
        })
    });

    console.log(
        "Loading NEW DATA FROM API for category >>>",
        category,
        keywords
    );

    const newsResponse = await res.json();

    // sort function by images vs not images present
        const news = sortNewsByImage(newsResponse.data.myQuery);
        console.log(news)
    //return res
    return news;
}

export default fetchNews;
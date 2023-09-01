"use client";

import { useRouter } from "next/navigation";

type Props = {
    article: Article
}

const ReadMoreButton = ({ article } : Props) => {
    const router = useRouter();

    function handleClick(){
        const queryString = Object.entries(article).map(([key, value]) => `${key}=${value}`).join("&");
        const url = `article?${queryString}`
        router.push(url)
        console.log(url)
    }

  return (
    <button onClick={handleClick} className="bg-purple-600 h-10 rounded-b-lg dark:text-gray-900 hover:bg-purple-700">Read more</button>
  )
}

export default ReadMoreButton;
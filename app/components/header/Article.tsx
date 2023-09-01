/* eslint-disable @next/next/no-img-element */
// import Image from "next/image"

import LiveTimestamp from "./LiveTimestamp";
import ReadMoreButton from "./ReadMoreButton";

type Props = {
  article: Article;
};

const Article = ({ article }: Props) => {
  return (
    <article className="bg-slate-100 dark:bg-slate-800 flex flex-col rounded-lg shadow-md hover:scale-105 hover:shadow-lg hover:bg-slate-200 transition-all duration-200 ease-out">
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="h-56 w-full object-cover rounded-t-lg shadow-md"
        />
      )}
      <div className="flex-1 flex flex-col">
        <div className="flex flex-col p-5 flex-1">
          <h2 className="font-serif font-bold">{article.title}</h2>

          <section className="flex-1 mt-2">
            <p className="text-xs line-clamp-2">{article.description}</p>
          </section>

          <footer className="text-xs text-right ml-auto flex pt-5 text-gray-400 space-x-1">
            <p>{article.source} -</p>
            <p>
              <LiveTimestamp time={article.published_at}/>
            </p>
          </footer>
        </div>
      </div>
      <ReadMoreButton article={article} />
    </article>
  );
};

export default Article;

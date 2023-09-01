"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const Searchbar = () => {
  const [input, setInput] = useState("");
  const router = useRouter();

  function handleSearch(e: FormEvent<HTMLFormElement>){
    e.preventDefault();
    if(!input) return;
    router.push(`/search?term=${input}`)
  }
  return (
    <form onSubmit={handleSearch} className="flex justify-between px-5 max-w-6xl mx-auto">
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Search here..." className="flex-1 w-full h-14 rounded-sm placeholder-gray-500 text-gray-500 outline-none bg-transparent dark:text-purple-600" />
      <button type="submit" disabled={!input} className="disabled:text-gray-400 text-purple-600">Search</button>
    </form>
  );
};

export default Searchbar;

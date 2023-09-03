import React from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Navbar from "./components/header/Navbar";
import Searchbar from "./components/header/Searchbar";
import DarkModeButton from "./components/general/DarkModeButton";

const Header = () => {
  return (
    <header>
      <div className="grid grid-cols-3 p-7 items-center">
        <Bars3Icon className="h-8 w-8 cursor-pointer" />
        <Link href="/" prefetch={false}>
          <h1 className="text-2xl text-center font-serif">
            Chrono<span className="text-purple-600">PRESS</span>
          </h1>
        </Link>
        <div className="flex items-center justify-end">
          <DarkModeButton />
        </div>
      </div>
      <Navbar />
      <Searchbar />
    </header>
  );
};

export default Header;

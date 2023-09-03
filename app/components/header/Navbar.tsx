"use client";
import { categories } from "@/constants";
import Navlink from "./Navlink";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  function isActive(path: string) {
    return pathname.split("/").pop() === path;
  }

  return (
    <nav className="grid grid-cols-4 md:grid-cols-7 text-xs md:text-sm gap-4 pb-10 max-w-6xl mx-auto w-auto border-b capitalize">
      {categories.map((category, i) => (
        <Navlink key={i} category={category} isActive={isActive(category)} />
      ))}
    </nav>
  );
};

export default Navbar;

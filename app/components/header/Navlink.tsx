import Link from "next/link";

type Props = {
  category: string;
  isActive: boolean;
};
const Navlink = ({ category, isActive }: Props) => {
  return (
    <Link
      href={`/news/${category}`}
      className={`navLink ${isActive && "font-bold"}`}
    >
      {category}
    </Link>
  );
};

export default Navlink;

import Link from "next/link";

const NavBar = () => {
  return (
    <div>
      <div className="">
        <p className="text-sm font-bold underline">Eric & The Web</p>
        <p className="text-sm font-bold underline">Designer & Developer</p>
      </div>
      <Link href="/">
        <a>About me</a>
      </Link>
      <Link href="/portfolio">
        <a>Portfolio</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </div>
  );
};

export default NavBar;

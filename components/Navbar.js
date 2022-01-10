import Link from "next/link";
import Image from "next/image";
import memojiImage from "../public/images/ericMemoji.png";

const NavBar = () => {
  return (
    <div className="flex justify-between	items-center rounded-xl	m-5 p-5 border border-slate-200">
      <div className="w-full lg:w-1/2 flex items-cente">
        <Image
          className="mr-10"
          src={memojiImage}
          alt="Picture of the author"
          width={60}
          height={64}
        />

        <div className="flex items-start flex-col	self-center	ml-5">
          <strong className="text-black font-body">Eric & The Web</strong>
          <span className="text-slate-300	font-body font-light">Designer & Developer</span>
        </div>
      </div>
      <div className="w-full lg:w-1/2	justify-between flex ">
        <Link href="/">
          <a className="font-body uppercase text-base	text-ForestGreen opacity-50	hover:opacity-100" >Home</a>
        </Link>
        <Link href="/about">
          <a className="font-body uppercase text-base	text-ForestGreen opacity-50	hover:opacity-100">About me</a>
        </Link>
        <Link href="/portfolio">
          <a className="font-body uppercase text-base	text-ForestGreen opacity-50	hover:opacity-100">Portfolio</a>
        </Link>
        <Link href="/contact">
          <a className="font-body uppercase text-base	text-ForestGreen opacity-50	hover:opacity-100">Contact</a>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;

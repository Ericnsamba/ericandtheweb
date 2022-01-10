import Link from "next/link";
import Image from "next/image";
import memojiImage from "../public/images/ericMemoji.png";

const NavBar = () => {
  return (
    <div className="flex justify-between	items-center rounded-xl	m-5 p-5 border">
      <div className="flex items-cente">
        <Image
          className="mr-10"
          src={memojiImage}
          alt="Picture of the author"
          width={60}
          height={64}
        />

        <div className="flex items-start flex-col	self-center	ml-5">
          <strong>Eric & The Web</strong>
          <span>Designer & Developer</span>
        </div>
        {/* <div className="flex items-cente">
          
          <p className="text-sm font-normal font-body">Eric & The Web</p>
          <p className="text-sm font-normal font-body">Designer & Developer</p>
        </div> */}
      </div>
      <div className="w-3/12	justify-between flex ">
        <Link href="/">
          <a className="font-body uppercase" >About me</a>
        </Link>
        <Link href="/portfolio">
          <a className="font-body uppercase">Portfolio</a>
        </Link>
        <Link href="/contact">
          <a className="font-body uppercase">Contact</a>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;

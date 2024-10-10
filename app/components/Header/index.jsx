import React from "react";
import Link from "next/link";

export default function Index() {
  return (
    <div className="flex justify-between fixed bg-slate-400t w-full px-20 pt-20">
      <Link
        className="menu_link font-medium text-black"
        scroll={false}
        href="/"
      >
        <div>
          <p className="text-grey-1 font-bold text-grey_1 text-lg">
            Eric Manasse
          </p>
          <div className="flex gap-1 z-10">
            <p className="text-grey font-medium text-black text-lg">
              Designer, Developer
            </p>
          </div>
        </div>
      </Link>
      <div>
        <p className="text-grey-1 font-bold text-grey_1 text-lg">
          work with me
        </p>
        <div className="flex gap-1 z-10">
          <p className="font-medium text-black text-lg">available for work</p>
        </div>
      </div>
      <div>
        <p className="text-grey-1 font-bold text-grey_1 text-lg">Navigation</p>
        <div className="flex gap-1 z-10 text-black font-medium text-lg">
          <Link
            className="menu_link font-medium text-black"
            scroll={false}
            href="/"
          >
            <p className="font-medium text-black">Work,</p>
          </Link>
          <Link
            className="menu_link font-medium text-black"
            scroll={false}
            href="/about"
          >
            <p className="font-medium text-black">About,</p>
          </Link>
          <Link
            className="menu_link font-medium text-black"
            scroll={false}
            href="/projects"
          >
            <p className="font-medium text-black">Projects,</p>
          </Link>
          <Link
            className="menu_link font-medium text-black"
            scroll={false}
            href="/projects"
          >
            <p className="font-medium text-black">Contact</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

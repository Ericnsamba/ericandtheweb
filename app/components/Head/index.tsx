"use client"
import React from "react";
import { usePathname, useRouter } from "next/navigation"



const  Head = () => {
  // console.log("🚀 pageProp: ===>",  useRouter)
  return (
    <>
      <link rel="icon" href="/favicon.png" />
      <title>Eric &amp; The Web | {usePathname()}</title>
        <meta
          name="Description"
          content="Product Designer and Developer"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
    </>
  );
}

export default Head;
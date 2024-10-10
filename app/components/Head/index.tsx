import { FC } from "react";

interface headProps {
  pageProp: any
  Component: any
}

const  Head: FC<headProps> = ({Component, pageProp}) => {
  console.log("🚀 pageProp:",  pageProp)
  return (
    <>
      <link rel="icon" href="/favicon.png" />
      <title>Eric &amp; The Web</title>
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
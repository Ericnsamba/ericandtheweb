// "use client"
import { FC } from "react";

interface headProps {
  params: any;
}

const Head: FC<headProps> = ({ params }) => {
  console.log("portfolio params ====>", params);
  return (
    <>
      <link rel="icon" href="/favicon.png" />
      <title>Eric &amp; The Web | Portfolio</title>
      <meta
          name="Description"
          content="Portfolio Work"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
    </>
  );
};

export default Head;

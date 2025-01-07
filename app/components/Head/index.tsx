"use client";
import React from "react";
import { usePageTitle } from "@/hooks/usePageTitle";

const CustomHead = () => {
  const pageTitle = usePageTitle();
  
  return (
    <head>
      <title>{pageTitle ? `${pageTitle} | Eric & The Web` : 'Eric & The Web'}</title>
        <meta name="description" content="UI/UX Product Designer and Developer based in London" />
        <meta property="og:image" content="/medias/eric_hero.jpg" />
        <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
    </head>
  );
};

export default CustomHead;

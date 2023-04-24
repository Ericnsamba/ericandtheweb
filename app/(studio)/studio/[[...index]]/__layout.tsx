"use client"
import React from "react";

type RootLayoutTypes = {
  children: React.ReactNode;
  params: any
};

export default function RootLayout({ children, params }: RootLayoutTypes) {
  console.log("🚀 ~ file: layout.tsx:9 ~ RootLayout ~ params:", params)
  return (
    <html>
      <head />
      <body className="bg-white ">
        <div className="data-scroll">{children}</div>
      </body>
    </html>
  );
}

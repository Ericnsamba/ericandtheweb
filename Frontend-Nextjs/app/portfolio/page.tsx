"use client";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import ProjectCard from "../../components/Projects";

export default function Home() {
  return (
    <div className="mx-auto flex w-full">
      <div className="w-2/12 "></div>
      <div className="w-8/12">
        <ProjectCard portfolio={undefined} />
      </div>
      <div className="w-2/12"></div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import Link from "next/link";
import getLatestRepos from "../lib/getLatestRepos";
import userData from "../constants/data";
import { GitHub } from "react-feather";

export default function LatestCode({ repositories }) {
  const [repos, setRepos] = useState([]);

  useEffect(async () => {
    // let latestRepos = await getLatestRepos(userData);
    // console.log("latestRepos", latestRepos);
    setRepos(repositories);
  }, []);
  return (
    <section className="">
      <div className="mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:pt-20 mx-10 ">
          <h1 className="text-6xl lg:text-9xl max-w-lg font-bold text-green dark:text-green my-20 md:my-0  text-center lg:text-left">
            Latest Code
          </h1>

          <a
            href={`https://github.com/${userData.githubUsername}`}
            className="mb-20 md:mb-0 px-8 py-4 rounded-md dark:bg-[#2c2c2c] shadow-lg text-xl flex flex-row space-x-4 items-center dark:text-green text-forestGreen"
          >
            <GitHub  size={24} className="text-forestGreen dark:text-green cursor-pointer hover:text-green "/>
            <p>View GitHub</p>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto py-10  gap-y-20">
        {/* Single github Repo */}
        {repos &&
          repos.map((latestRepo, idx) => (
            <GithubRepoCard latestRepo={latestRepo} key="idx" />
          ))}
      </div>
    </section>
  );
}

const GithubRepoCard = ({ latestRepo }) => {
  return (
    <div className="github-repo p-10">
      <h1 className="font-display text-xl dark:text-green text-forestGreen">
        {latestRepo.name}
      </h1>
      <p className="text-base font-normal my-4 text-slate-400">
        {latestRepo.description}
      </p>
      <a
        href={latestRepo.clone_url}
        className="font-display group flex flex-row space-x-2 w-full items-center"
      >
        <p className="font-body dark:text-green text-forestGreen">
          View Repository{" "}
        </p>
        <div className="dark:text-green text-forestGreen transform  group-hover:translate-x-2 transition duration-300">
          &rarr;
        </div>
      </a>
    </div>
  );
};

"use client";
import { Router } from "next/router";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";
import Image from "next/image";
import { sanityClient } from "../../../utils/client";
import Button from "../../../components/Atoms/Button";
import image from "../../../public/assets/images/Eventify.jpg";
import arrowUpRight from "../../../public/assets/icons/Icons-up-right.svg";
import downloadIcon from "../../../public/assets/icons/icon-up-right.svg";
import { useNextSanityImage } from "next-sanity-image";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import { useSkewAnimate } from "../../../hooks/useSkewAnimate";
import gsap from "gsap";

// import { type } from "os";

interface portfolioTypes {
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  app_link?: string;
  web_link?: string;
  brief?: string;
  challenge?: string;
  solution?: string;
  mainImage: string;
  imagesGallery: [];
}

const builder = imageUrlBuilder(sanityClient);

const PortfolioItem = ({ params, about }: any) => {
  const [portfolioItem, setPortfolioItem] = useState({} as portfolioTypes);
  const pageSlug = params.name;
  // const router = useRouter();
  // const [imageUrl, setImageUrl] = useState("");
  // const imageProps = useNextSanityImage(sanityClient, portfolioItem.mainImage);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPortfolioData(pageSlug);
      setPortfolioItem(data);
    };
    fetchData();
    //
  }, [pageSlug]);

  const {
    title,
    category,
    year,
    description,
    slug,
    web_link,
    app_link,
    brief,
    challenge,
    solution,
    imagesGallery,
    mainImage,
  } = portfolioItem;

  const url =
    mainImage !== undefined ? builder.image(mainImage).url().toString() : null;

  const imagesGalleryUrl =
    imagesGallery && imagesGallery.length > 0
      ? imagesGallery.map((image) => builder.image(image).url().toString())
      : null;

      useLayoutEffect(() => {
        let ctx = gsap.context(() => {
          // WorkExperienceSection();
          useSkewAnimate(".skewElem")
          // 
        });
    
        return () => ctx.revert();
      });

  return (
    <div className="lg:w-8/12 w-full lg:px-0 px-5 mx-auto bg-teal-1000 py-32">
      <div className="flex items-start lg:items-center  justify-between w-full my-[60px] flex-col lg:flex-row gap-5">
        <h3 className="skewElem text-green leading-120 text-[24px] lg:text-[44px]">{title}</h3>

        <div className="flex">
          <Button
            children={undefined}
            onClick="/portfolio"
            title={"Back to Projects"}
            type={"danger"}
            showIconRight
            iconRight={arrowUpRight}
            target="_self"
          />
        </div>
      </div>

      <div className=" flex items-center justify-between w-full mb-[60px] bg-slate-400 rounded-[18px]">
        {mainImage ? (
          <img
            src={url as string}
            alt={`${title} cover image`}
            height={328}
            className=" object-cover rounded-[18px] relative w-full h-[328px]"
          />
        ) : null}
      </div>

      <div className="flex flex-col gap-10 w-full mb-[60px]">
        <div className="">
          <p className="leading-6 text-gray mb-5 uppercase">
            <span className="pr-2">{category}</span>|
            <span className="pl-2">{year} </span>
          </p>
          <p className="leading-6 text-black"> {description}</p>
        </div>
        <div className="flex gap-5">
          {portfolioItem && web_link ? (
            <Button
              children={undefined}
              onClick={""}
              title={"Visit Website"}
              type={"danger"}
              showIconRight
              iconRight={arrowUpRight}
            />
          ) : null}

          {portfolioItem && app_link ? (
            <Button
              children={undefined}
              onClick={""}
              title={"View in AppStore"}
              type={"danger"}
              showIconRight
              iconRight={arrowUpRight}
            />
          ) : null}
        </div>
      </div>

      {/* Brief section  */}
      {brief ? (
        <div className="flex flex-col gap-5 w-full mb-[60px]">
          <h6 className="text-green leading-120 ">Brief</h6>
          <p className="leading-6 text-black">{brief}</p>
        </div>
      ) : null}

      {/* Challenge section  */}
      {challenge ? (
        <div className="flex flex-col gap-5 w-full mb-[60px]">
          <h6 className="text-green leading-120 ">Challenge</h6>
          <p className="leading-6 text-black">{challenge}</p>
        </div>
      ) : null}

      {/* solution section  */}
      {solution ? (
        <div className="flex flex-col gap-5 w-full mb-[60px]">
          <h6 className="text-green leading-120 ">Solution</h6>
          <p className="leading-6 text-black">{solution}</p>
        </div>
      ) : null}

      {/* Images gallery */}
      <div className="skewElem flex flex-col gap-5 w-full mb-[60px] overflow-x-scroll overflow-hidden">
        {imagesGallery && imagesGallery.length > 0 ? (
          <div className="flex lg:flex-row justify-between gap-5">
            {imagesGallery.map((image, index) => (
              <img
                src={
                  imagesGalleryUrl
                    ? (imagesGalleryUrl[index] as string)
                    : undefined
                }
                alt={""}
                className="object-cover rounded-[18px] w-full lg:max-w-[260px] h-[360px]"
              />
            ))}
          </div>
        ) : null}
      </div>
      {/*  */}
    </div>
  );
};

async function getPortfolioData(name: string) {
  const query = encodeURIComponent(
    `*[ _type == "portfolio" && slug.current == "${name}"]`
  );
  const url = `https://f1xjktsq.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then((res) => res.json());

  const portfolio = result.result[0];
  if (!portfolio) {
    return {
      notFound: true,
    };
  } else {
    return portfolio;
  }
}

export default PortfolioItem;

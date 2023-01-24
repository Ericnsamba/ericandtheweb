"use client";
import { Router } from "next/router";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { sanityClient } from "../../../utils/client";
import Button from "../../../components/Atoms/Button";
import image from "../../../public/assets/images/Eventify.jpg";
import arrowUpRight from "../../../public/assets/icons/Icons-up-right.svg";
import downloadIcon from "../../../public/assets/icons/icon-up-right.svg";
import { useNextSanityImage } from "next-sanity-image";
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

const PortfolioItem = ({ params }: any) => {
  const router = useRouter();
  const [portfolioItem, setPortfolioItem] = useState({} as portfolioTypes);
  const [imageUrl, setImageUrl] = useState("");
  const pageSlug = params.name;

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPortfolioData(pageSlug);
      setPortfolioItem(data);
    };
    fetchData();
  }, [pageSlug]);

  const imageProps = useNextSanityImage(sanityClient, portfolioItem.mainImage);

  // const galleryImageProps = useNextSanityImage(
  //   sanityClient,
  //   portfolioItem.imagesGallery
  // );

  const galleryImageProps = () => {
   return  portfolioItem.imagesGallery ?
    portfolioItem.imagesGallery.map((item) =>
      useNextSanityImage(sanityClient, item.imagesGallery)
    ) : null 
  };
   

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
  } = portfolioItem;

  // console.log("============>", galleryImageProps);
  console.log("============>", imagesGallery);

  return (
    <div className="w-8/12  mx-auto bg-teal-1000 ">
      <div className="flex items-center justify-between w-full mb-[60px]">
        <h3 className="text-green leading-120 ">{title}</h3>
        <Button
          children={undefined}
          onClick={() => router.back()}
          title={"Back to Projects"}
          type={"danger"}
          showIconRight
          iconRight={arrowUpRight}
        />
      </div>

      <div className="flex items-center justify-between w-full mb-[60px] bg-slate-400 rounded-[18px]">
        <Image
          {...imageProps}
          alt={""}
          height={328}
          className=" object-cover rounded-[18px] relative w-full h-[328px]"
        />
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
              onClick={() => console.log()}
              title={"Visit Website"}
              type={"danger"}
              showIconRight
              iconRight={arrowUpRight}
            />
          ) : null}

          {portfolioItem && app_link ? (
            <Button
              children={undefined}
              onClick={() => console.log()}
              title={"View in AppStore"}
              type={"danger"}
              showIconRight
              iconRight={arrowUpRight}
            />
          ) : null}
        </div>
      </div>

      {/* Brief section  */}

      <div className="flex flex-col gap-5 w-full mb-[60px]">
        <h6 className="text-green leading-120 ">Brief</h6>
        <p className="leading-6 text-black">{brief}</p>
      </div>

      {/* Images gallery */}
      <div className="flex flex-col gap-5 w-full mb-[60px]">
        {imagesGallery && imagesGallery.length > 0 ? (
          <div className="flex gap-5">
          {imagesGallery.map((image, index) => (
            <Image
            {...useNextSanityImage(sanityClient, image.imagesGallery)}
            alt={""}
            height={360}
            className=" object-cover rounded-[18px] relative w-full h-[360px]"
          />
        ))}
        </div>
        ): null }
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

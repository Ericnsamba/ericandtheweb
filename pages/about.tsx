import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import EricPhoto from "../public/images/eric-picture.png";

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Eric &amp; the web | Portfolio</title>
        <meta
          name="description"
          content="Product designer and app developer website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-auto container px-4 xl:px-12 2xl:px-4 ">
        <div className="lg:flex">
          <div className="w-full sm:px-0  lg:w-1/2 justify-between flex flex-col lg:px-10 h-full">
            <h1 className="text-7xl text-green font-bold font-display">
              About me
            </h1>

            <div className="py-10">
              <p>
                I am a developer and UX/UI designer based in Italy. National and
                international customers have relied on me for design,
                implementation, and management of their digital products. As a
                freelancer, I works also with web agencies, companies, startups
                and individuals to create a blueprint for the digital business.
                Also, Judge at CSSDA and Envato Author.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 sm:px-0 justify-between flex flex-col lg:px-10 py-1">
            <div className="bg-slate-00 block">
              <Image
                className="mr-10 bg-slate-200"
                src={EricPhoto}
                alt="Picture of the author"
                // layout="fill" // required
                objectFit="cover"
                priority
                width="479"
                height="516"
              />
            </div>

            <div className="flex flex-col bg-green rounded-lg overflow-hidden p-7 max-w-xs -mt-20 lg:-mr-10 -mr-6 self-end	z-10 hover:shadow-md">
              <h4 className="font-display mb-4">Portfolio</h4>
              <p className="font-body ">
                I am a developer and UX/UI designer based in Italy. National and
                international customers have relied.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

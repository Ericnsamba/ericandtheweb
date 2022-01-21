import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import EricPhoto from "../public/assets/images/eric-picture.png";

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Eric &amp; the web | About me</title>
        <meta
          name="description"
          content="Product designer and app developer website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-auto container px-4 xl:px-12 2xl:px-4 ">
        <div className="lg:flex">
          <div className="w-full lg:w-1/2 sm:px-0 justify-between flex flex-col lg:px-10 py-1">
            <div className="">
              <h1 className="text-7xl text-green font-bold ">
                About me
              </h1>

              <div className="py-10">
                <p className="text-forestGreen dark:text-green font-normal">
                  I'm Eric — a product designer and app developer.
                  I have spent the last 3 years designing & building web applications for some of the world's biggest asset managers like Generali, Boston Partners, CTI and many others, whilst working at Kurtosys.
                  I’m always learning more, i am pretty much  a javaScript and its frameworks lover.
                  I am passionate about beautiful, clean and minimal designs.
                  I learn quickly and i dont sleep till i solve a bug or i am happy with my design.
                </p>
              </div>
            </div>

            <div>
                <div className=" pb-3">
                  <p className="subheader text-forestGreen dark:text-green">Mentor</p>
                  <p className="text-base text-black dark:text-slate-300">
                    <a href="https://www.linkedin.com/in/tim-gaud/">Tim Gaud</a>
                  </p>
                </div>
                <div className=" pb-10">
                  <p className="subheader text-forestGreen dark:text-green">Recognitions</p>
                  <p className="text-base text-black dark:text-slate-300">Muzli <span className="text-sm px-3 text-green dark:text-slate-300"><a href="https://medium.muz.li/made-with-studio-67-21849f2f5cc4">#33</a></span></p>
                </div>
              </div>


          </div>

          <div className="w-full lg:w-1/2 sm:px-0 justify-between flex flex-col lg:px-10 py-1">
            <div className="bg-slate-00 block">
              <Image
                className="mr-10 bg-slate-200 rounded-2xl"
                src={EricPhoto}
                alt="Picture of the author"
                // layout="fill" // required
                objectFit="cover"
                priority
                width="479"
                height="516"
              />
            </div>

            <div className="flex flex-col bg-green rounded-lg overflow-hidden p-7 lg:w-96 w-64 -mt-20 lg:-mr-10 lg:self-end self-center	z-10 ">
              <h4 className="subheader text-black font-display mb-4 text-white text-lg">Portfolio</h4>
              <p className="font-body text-black">
                I am a developer and a Prdoduct(UX/UI) designer based in London.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SvgAnimation from "../components/SvgAnimation"
import EricPhoto from "../public/assets/images/eric-picture.png";


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Eric &amp; the web | Home</title>
        <meta name="description" content="Product designer and app developer website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="landing-hero py-20">
          <h1 className="UltralightFontSize lg:text-9xl text-4xl text-green font-display">
            Creative
          </h1>

          <div className="flex py-4">
            <SvgAnimation className="hidden lg:flex" />
            {/* mobile */}
            <h1 className="lg:hidden text-4xl text-green font-display ">
              Developer
            </h1>
            <span className="flex items-end lg:-mb-2 px-4 text-base text-forestGreen font-display"> And</span>
          </div>

          <h1 className="UltralightFontSize lg:text-9xl text-4xl text-green font-display">
            Designer
          </h1>

        </div>

        {/* About section */}
        <div className="mx-auto container px-4 xl:px-12 2xl:px-4 py-12 lg:mt-20 bg-bgGrey rounded-2xl">
          <div className="lg:flex">
            <div className="w-full lg:w-1/2 sm:px-0 justify-between flex flex-col lg:px-10 py-1">
              {/* <div className="w-full h-full bg-slate-100 sm:px-0  lg:w-1/2 justify-between flex flex-col lg:px-10 h-full"> */}


              <div className="">
                <h1 className="text-7xl text-green font-bold ">
                  About me
                </h1>

                <div className="py-10">
                  <p className="text-black font-normal">
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
                  <p className="subheader">Mentor</p>
                  <p className="text-base text-black">
                    <a href="https://www.linkedin.com/in/tim-gaud/">Tim Gaud</a>
                  </p>
                </div>
                <div className=" pb-10">
                  <p className="subheader">Recognitions</p>
                  <p className="text-base text-black">Muzli <span className="text-sm px-3 text-green"><a href="https://medium.muz.li/made-with-studio-67-21849f2f5cc4">#33</a></span></p>
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
      </main>
    </div>
  );
}
// Eric & The Web
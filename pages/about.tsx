import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import EricPhoto from "../public/images/eric-picture.png";


export default function AboutPage() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Eric &amp; the web | Portfolio</title>
                <meta name="description" content="Product designer and app developer website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="mx-auto container px-4 xl:px-12 2xl:px-4">
                <div className="lg:flex">

                    <div className="w-full lg:w-1/2	justify-between flex flex-col px-10 h-full">
                        <h1 className="text-7xl text-green font-bold font-display">About me</h1>

                        <div className="py-10">
                            <p> I am a developer and UX/UI designer based in Italy.
                                National and international customers have relied on me for design,
                                implementation, and management of their digital products. As a freelancer,
                                I works also with web agencies, companies, startups and individuals to create a
                                blueprint for the digital business. Also, Judge at CSSDA and Envato Author.
                            </p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2	justify-between flex flex-col px-10 py-1">

                        <Image
                            className="mr-10 aspect-auto bg-slate-200"
                            src={EricPhoto}
                            alt="Picture of the author"
                            //   width={294}
                            height={550}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Camera, Dribbble, GitHub, Twitter, Linkedin, Instagram, MapPin, Mail, Phone } from "react-feather";


export default function ContactPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Eric &amp; the web | Contact</title>
        <meta name="description" content="Product designer and app developer website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="mx-auto container px-4 xl:px-12 lg:mt-20 ">
          <div className="lg:flex">
            <div className="w-full lg:w-1/2 sm:px-0 justify-between flex flex-col py-1">
              {/* <div className="w-full h-full bg-slate-100 sm:px-0  lg:w-1/2 justify-between flex flex-col h-full"> */}
              <div className="">
                <h1 className="text-7xl text-forestGreen font-bold dark:text-green">
                  Get in touch
                </h1>

                <div className="py-10">
                  <p className="text-black font-normal dark:text-green">
                    I like working on existing ideas, get in touch if you have any. 😎
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 sm:px-0 justify-between flex flex-col py-1">
              <ul role="list" className="px-6">
                {/* Remove top/bottom padding when first/last child  */}
                <li className="flex py-6">
                  {/* <img className="h-10 w-10 rounded-full" src="{person.imageUrl}" alt="" /> */}
                  <MapPin size={24} className="text-forestGreen dark:text-green cursor-pointer hover:text-green " />
                  <div className="ml-3 overflow-hidden">
                    <p className="text-sm font-display text-forestGreen dark:text-green">Location</p>
                    <p className="text-base text-slate-400 truncate font-light font-body">Based in London | Work remotely</p>
                  </div>
                </li>
                <li className="flex py-6">
                  {/* <img className="h-10 w-10 rounded-full" src="{person.imageUrl}" alt="" /> */}
                  <Mail size={24} className="text-forestGreen dark:text-green cursor-pointer hover:text-green " />
                  <div className="ml-3 overflow-hidden">
                    <p className="text-sm font-display text-forestGreen dark:text-green">Lets Chat</p>
                    <p className="text-base text-slate-400 truncate font-light font-body">hello@ericandthweb.com</p>
                  </div>
                </li>
                <li className="flex py-6 ">
                  {/* <img className="h-10 w-10 rounded-full" src="{person.imageUrl}" alt="" /> */}
                  <Phone size={24} className="text-forestGreen dark:text-green cursor-pointer hover:text-green " />
                  <div className="ml-3 overflow-hidden">
                    <p className="text-sm font-display text-forestGreen dark:text-green">Lets Talk</p>
                    <p className="text-base text-slate-400 truncate font-light font-body">+44 61 057 617 </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}




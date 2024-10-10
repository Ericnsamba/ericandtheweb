import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen px-20 pt-[20vh]">
      <main className="container mx-auto flex flex-col gap-[10vh] row-start-2 items-center sm:items-start w-full bg-red-200t">
        <div className="hero flex flex-col gap-6 bg-yellow-200t w-full">
          <div className="h-[204px] justify-start items-center inline-flex self-end gap-[2vw]">
            <img
              className="w-[520px] h-[188px]"
              src="https://via.placeholder.com/520x188"
            />
            <div className="flex-col justify-start items-start gap-8 inline-flex">
              <div className="text-black text-8xl font-medium font-inter uppercase leading-[86.40px] tracking-widest">
                Eric
              </div>
              <div className="text-center text-black text-8xl font-medium font-inter uppercase leading-[86.40px] tracking-widest">
                Manasse
              </div>
            </div>
          </div>
          {/*  */}
          <div className="justify-start items-center gap-[2vw] inline-flex self-start">
            <div className=" flex-col justify-start items-start gap-[31px] inline-flex">
              <h1 className="text-black text-8xl font-medium font-inter uppercase leading-[86.40px] tracking-widest">
                product
              </h1>
              <h1 className="text-center text-black text-8xl font-medium font-inter uppercase leading-[86.40px] tracking-widest">
                designer
              </h1>
            </div>
            <img
              className="w-[520px] h-[187px]"
              src="https://via.placeholder.com/520x187"
            />
          </div>
        </div>

        {/* bottom hero */}
        <div className="w-full justify-between flex bg-fuchsia-300t bottom-0 relative items-end">
          <p className="text-black text-2xl font-normal font-Inter capitalize leading-[32px] tracking-wide">
            Based in London,Uk
            <br />
            specialised in UX / UI and <br />
            Software Development.
          </p>
          <div className="p-2 justify-center items-center gap-2 flex">
            <div>
              <span className="text-black text-base font-bold font-inter uppercase leading-snug tracking-tight">
                Scroll
              </span>
              <span className="text-black text-base font-normal font-inter uppercase leading-snug tracking-tight">
                to See more.
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
    </div>
  );
}

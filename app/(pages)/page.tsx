"use client";
import Transition from "@/components/Transition/index";


const Home = () => {
  // const router = useRouter()
  // console.log("🚀 ~ router ===>:", router)

  const lg_row1 = "lg:col-start-3 lg:col-span-10 lg:items-center lg:inline-flex lg:flex-row lg:pr-6 lg:gap-[2vw]";
  const lg_row2 = "lg:col-start-1 lg:col-span-9  lg:items-center lg:inline-flex lg:flex-row lg:gap-[2vw] lg:pl-6";

  return (
    <Transition>
      <section className="h-full lg:h-screen px-6 lg:px-20 lg:pt-[20vh] py-10 overflow-hidden">
        <div className="flex flex-col gap-6 justify-between lg:gap-[10vh] w-full bg-fuchsia-900t h-full">
          {/* Adjusted the grid to explicitly define rows */}
          <div className="hero flex flex-col gap-4 lg:grid lg:grid-cols-12 lg:grid-rows-2 w-full lg:gap-y-6">
            {/* row 1 */}
            <div className={`flex flex-col-reverse gap-6  justify-end ${lg_row1} `}>
              <img
                className="w-[225px] h-[113px] lg:w-[520px] lg:h-[188px] bg-slate-400"
                src="https://via.placeholder.com/520x188"
                alt="Eric Manasse"
              />
              <div className="flex-col inline-flex justify-start items-start lg:gap-8 ">
                <h1 className="text-black text-6xl lg:text-8xl font-medium font-inter uppercase lg:leading-[86.40px] tracking-widest">
                  Eric
                </h1>
                <h1 className="text-center text-black text-6xl lg:text-8xl font-medium font-inter uppercase lg:leading-[86.40px] tracking-widest">
                  Manasse
                </h1>
              </div>
            </div>

            {/* row 2 */}
            <div className={`flex flex-col-reverse gap-6 items-end justify-start ${lg_row2}`}>
              <div className="flex-col justify-start items-start gap-[31px] inline-flex">
                <h1 className="text-black text-6xl lg:text-8xl font-medium font-inter uppercase lg:leading-[86.40px] tracking-widest">
                  Product
                </h1>
                <h1 className="text-black text-6xl lg:text-8xl font-medium font-inter uppercase lg:leading-[86.40px] tracking-widest">
                  Designer
                </h1>
              </div>
              <img
                className="w-[225px] h-[113px] lg:w-[520px] lg:h-[188px] bg-slate-400"
                src="https://via.placeholder.com/520x187"
                alt="Product Designer"
              />
            </div>
          </div>

          {/* bottom hero */}
          <div className="w-full justify-between gap-6 flex flex-col mt-16 bottom-0 relative items-start lg:items-end lg:flex-row">
            <p className="text-black text-2xl font-normal font-inter capitalize  tracking-wide">
              Based in London, UK
              <br />
              Specialised in UX / UI and <br />
              Software Development.
            </p>
            <div className="self-end justify-center items-center gap-2 flex">
              <p>
                <span className="text-black text-base font-bold font-inter uppercase leading-snug tracking-tight">
                  Scroll
                </span>
                <span className="text-black text-base font-normal font-inter uppercase leading-snug tracking-tight">
                  to See more.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Transition>
  );
};

export default Home;

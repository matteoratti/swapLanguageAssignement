import circles from "./assets/hero-section/dashed-circles.svg";
import avatar1 from "./assets/hero-section/hero-avatar-1.svg";
import avatar2 from "./assets/hero-section/hero-avatar-2.svg";
import avatar3 from "./assets/hero-section/hero-avatar-3.svg";
import hero from "./assets/hero-section/main-hero-graphic.png";
import CounterAnimation from "./components/CounterAnimation/CounterAnimation";
import FeaturedSection from "./components/FeaturedSection/FeaturedSection";
import Header from "./components/Header/Header";

export default function App() {
  return (
    <main className="">
      <Header />

      {/* HERO SECTION */}
      <section className="bg-orange-light ">
        <div className="flex justify-between pt-[183px] pb-[119px] mx-[75px]">
          <div className="">
            <h1 className="font-montserrat text-blue text-4xl font-bold capitalize mb-5 leading-[48px]">
              the best <br />
              language learning <br /> for internationals
            </h1>
            <p className="font-helvetica text-blue font-normal mb-[116px] leading-[30px]">
              Learn the language with your co-workers and friends <br /> in the
              Language Hub.
            </p>
            <button className="font-inter text-white font-bold first-letter:capitalize bg-orange rounded-lg px-5 py-4">
              get started for free
            </button>
          </div>

          <div className="relative">
            <img
              className="absolute right-[240px] bottom-[90px]"
              src={circles}
              alt=""
            />
            <span className="absolute left-[-80px] bottom-[25%] flex">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-75 z-10"></span>
              <img className="z-20" src={avatar1} alt="" />
            </span>

            <span className="absolute left-[-100px] bottom-[90%] flex">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-75 z-10"></span>
              <img className="z-20" src={avatar2} alt="" />
            </span>

            <span className="absolute left-[28%] bottom-[102%] flex">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-75 z-10"></span>
              <img className="z-20" src={avatar3} alt="" />
            </span>

            <img
              className="relative z-10 ciao"
              loading="lazy"
              src={hero}
              alt="a man having a video call"
            />
          </div>
        </div>
      </section>

      {/* NUMBERS SECTION */}
      <section className="mx-[120px] pt-[60px] pb-24">
        <p className="font-helvetica text-orange font-bold uppercase text-center text-xs pb-5">
          why choosing swap language
        </p>
        <h2 className="font-montserrat text-blue font-bold text-3xl text-center mx-40">
          We help businesses attract and retain international talent.
        </h2>
        <ul className="flex mt-14 gap-16">
          <li>
            <p className="font-montserrat text-4xl font-bold text-[#10B981] mb-[14px] h-10 overflow-hidden flex">
              <CounterAnimation numbers={[1, 2, 3, 4, 5, 6, 7, 8, 9]} />
              <CounterAnimation numbers={[1, 2, 3]} />
              <span className="pl-2">%</span>
            </p>
            <p className="font-helvetica text-base text-blue">
              of our users believe that speaking Danish helps them connect with
              Danish colleagues.
            </p>
          </li>
          <li>
            <p className="font-montserrat text-4xl font-bold text-[#3B82F6] mb-[14px] h-10 overflow-hidden flex">
              <CounterAnimation numbers={[1, 2, 3, 4, 5]} />
              <CounterAnimation numbers={[1, 2]} />
              <span className="pl-2">%</span>
            </p>
            <p className="font-helvetica text-base text-blue">
              of our users use Danish every day after 6 months.
            </p>
          </li>
          <li>
            <p className="font-montserrat text-4xl font-bold text-[#EAB308] mb-[14px] h-10 overflow-hidden flex">
              <CounterAnimation numbers={[1, 2, 3, 4, 5, 6]} />
              <CounterAnimation numbers={[4, 3, 2, 1, 0]} />
              <span className="pl-2">%</span>
            </p>
            <p className="font-helvetica text-base text-blue">
              of international employees rate language training as their number
              one priority.
            </p>
          </li>
          <li>
            <p className="font-montserrat text-4xl font-bold text-[#A855F7] mb-[14px] h-10 overflow-hidden flex">
              <CounterAnimation numbers={[1, 2, 3, 4, 5, 6, 7]} />
              <CounterAnimation numbers={[5, 4, 3, 2, 1]} />
              <span className="pl-2">%</span>
            </p>
            <p className="font-helvetica text-base text-blue">
              of our users feel confident speaking Danish after 6 months.
            </p>
          </li>
        </ul>
      </section>

      {/* INFO SECTION */}
      <FeaturedSection />
    </main>
  );
}

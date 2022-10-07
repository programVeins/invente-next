import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import AboutInvente from "../components/about-invente";
import BlurryCircle from "../components/blurry-circle";
import BlurryJumbotron from "../components/blurry-jumbotron";
import CountDown from "../components/countdown";
import EventGrid from "../components/event-grid";
import Footer from "../components/footer";
import Header from "../components/header/header";
import VectorsBG from "../components/vectors-bg";

const Home: NextPage = () => {
  const depts = [
    {
      name: "CSE",
      img: "/images/cse.png",
      link: "/coming-soon",
    },
    {
      name: "IT",
      img: "/images/it.png",
      link: "/coming-soon",
    },
    {
      name: "ECE",
      img: "/images/ece.png",
      link: "/coming-soon",
    },
    {
      name: "EEE",
      img: "/images/eee.png",
      link: "/coming-soon",
    },
    {
      name: "BME",
      img: "/images/bme.png",
      link: "/coming-soon",
    },
    {
      name: "CIVIL",
      img: "/images/civil.png",
      link: "/coming-soon",
    },
    {
      name: "MECH",
      img: "/images/mech.png",
      link: "/coming-soon",
    },
    {
      name: "CHEM",
      img: "/images/chem.png",
      link: "/coming-soon",
    },
  ];
  return (
    <div className="bg-background min-h-screen">
      <main>
        <Header />
        <VectorsBG />
        <BlurryCircle />

        <section>
          <div className="text-center mt-40 lg:mt-20">
            <img src="/vectors/invente.svg" className="scale-75 lg:scale-50" />
            <div className="mt-0 sm:-mt-10 lg:-mt-20 xl:-mt-32 text-sm mg:text-lg lg:text-2xl font-aspace text-white/80">
              Create. Elevate. Sustain.
            </div>
            <div className="mt-2 mb-20 text-sm mg:text-lg lg:text-2xl font-aspace text-white/80">
              4th & 5th November
            </div>

            <CountDown />
            <div className="mt-40">
              <BlurryJumbotron />
            </div>
            <div className="w-3/4 mx-auto">
              <AboutInvente />
            </div>

            <div className="w-3/4 mx-auto">
              <EventGrid depts={depts} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;

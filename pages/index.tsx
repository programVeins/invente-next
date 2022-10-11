import type { NextPage } from "next";
import React, { useEffect } from "react";
import AboutInvente from "../components/about-invente";
import BlurryCircle from "../components/blurry-circle";
import BlurryJumbotron from "../components/blurry-jumbotron";
import CountDown from "../components/countdown";
import EventGrid from "../components/event-grid";
import Footer from "../components/footer";
import Header from "../components/header/header";
import VectorsBG from "../components/vectors-bg";
import { useAuth } from "../lib/authContext";

const Home: NextPage = () => {
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      user.getIdToken().then((token) => {
        console.log(token);
      });
    }
  }, [user]);
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
          <div className="">
            <div className="flex flex-col justify-center items-center mt-40 lg:mt-20">
              <div className="hidden w-full  md:flex items-start lg:-mt-20 justify-evenly">
                <img src="/vectors/ssn.svg" className="w-80 h-80 lg:scale-50" />
                <img
                  src="/vectors/invente.svg"
                  className="mt-[20rem] mb-[10rem] scale-[2.0]"
                />
                <img src="/vectors/snu.svg" className="w-80 h-80 lg:scale-50" />
              </div>
              <div className="flex justify-between w-full md:hidden -mt-20 px-2">
                <img src="/vectors/ssn.svg" className="w-28 h-28" />
                <img src="/vectors/snu.svg" className="w-28 h-28" />
              </div>
              <img
                src="/vectors/invente.svg"
                className="md:hidden px-2 scale-95"
              />
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

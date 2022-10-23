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

export const depts = [
  {
    name: "Computer Science and Engineering",
    img: "/images/cse.png",
    link: "/events/computer-science-and-engineering",
  },
  {
    name: "Information Technology",
    img: "/images/it.png",
    link: "/events/information-technology",
  },
  {
    name: "Electronics and Communication Engineering",
    img: "/images/ece.jpeg",
    link: "/events/electronics-and-communication",
  },
  {
    name: "Electrical and Electronics Engineering",
    img: "/images/eee.jpeg",
    link: "/events/electrical-and-electronics",
  },
  {
    name: "Biomedical Engineering",
    img: "/images/bme.jpeg",
    link: "/events/biomedical",
  },
  {
    name: "Civil Engineering",
    img: "/images/civil.jpeg",
    link: "/events/civil",
  },
  {
    name: "Mechanical Engineering",
    img: "/images/mech.jpeg",
    link: "/events/mechanical",
  },
  {
    name: "Chemical Engineering",
    img: "/images/chem.jpeg",
    link: "/events/chemical",
  },
  {
    name: "SNUC Commerce",
    img: "/images/com.jpeg",
    link: "/coming-soon",
  },
];

const Home: NextPage = () => {
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      user.getIdToken().then((token) => {
        console.log(token);
      });
    }
  }, [user]);

  return (
    <div className="bg-background min-h-screen">
      <main>
        <Header />
        <VectorsBG />
        <BlurryCircle />
        <section>
          <div className="">
            <div className="flex flex-col justify-center items-center mt-40 lg:mt-20">
              <div className="hidden w-full md:flex items-start lg:-mt-20 justify-evenly">
                <img src="/vectors/ssn.svg" className="w-80 h-80 lg:scale-50" />

                <div className="flex flex-col">
                  <img
                    className="mt-[15rem] mb-[1rem] h-20 z-10"
                    src="/images/sponsors/tmb.png"
                  />
                  <p className=" text-center  text-white font-ubuntu text-2xl">
                    presents
                  </p>
                  <img
                    src="/vectors/invente.svg"
                    className="mt-[2rem] mb-[5rem] scale-[2.0]"
                  />
                  <p className="text-center text-white font-ubuntu text-2xl">
                    Powered by
                  </p>
                  <img
                    className="mt-5 mb-10 h-14 z-10"
                    src="/images/sponsors/sattva.png"
                  />
                </div>

                <img src="/vectors/snu.svg" className="w-80 h-80 lg:scale-75" />
              </div>

              <div className="flex justify-between w-full md:hidden -mt-20 px-2">
                <img src="/vectors/ssn.svg" className="w-24 h-24" />
                <img src="/vectors/snu.svg" className="w-24 h-24" />
              </div>
              <img
                src="/vectors/invente.svg"
                className="md:hidden px-2 scale-95 my-10"
              />
              <div className="flex flex-col w-1/2 z-10 mb-10 mx-auto lg:hidden gap-10 opacity-100">
                <img className="" src="/images/sponsors/tmb.png" />
                <img className="" src="/images/sponsors/sattva.png" />
              </div>
            </div>
            <CountDown />
            <div className="mt-40">
              <BlurryJumbotron />
            </div>
            <div className="w-5/6 lg:w-3/4 mx-auto">
              <AboutInvente />
            </div>

            <div className="w-5/6 lg:w-3/4 mx-auto">
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

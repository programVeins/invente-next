import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
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
    link: "/events/snuc",
  },
];

const Home: NextPage = () => {
  const { user } = useAuth();
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    if (user) {
      user.getIdToken().then((token) => {
        console.log(token);
      });
    }
  }, [user]);

  useEffect(() => {
    // if (localStorage.getItem('hasSeenModal') == 'true')
    //   setShowModal(false);
  }, []);

  const onClose = () => {
    localStorage.setItem('hasSeenModal', 'true');
    setShowModal(false);
  }

  return (
    <div className={`bg-background min-h-screen ${showModal ? '' : ''}`}>
      {showModal ? (
        <div className="fixed w-screen h-screen z-40 bg-gray-900">
          <div className="absolute top-1/2 left-1/2 z-40 rounded-md -translate-x-1/2 -translate-y-1/2">
            <div className="bg-transparent p-6 pt-8 rounded-t-md">
              <h1 className="text-4xl text-center text-white">
                Latest Update
              </h1>
              <p className="text-xl text-white">
                Sorry to inform you that Invente '22 has been postponed due to heavy rains
              </p>
            </div>
            <div className="bg-transparent w-full px-6 py-4 flex justify-end">
              <button className="w-fit bg-gray-800 text-white text-lg px-2 py-1 rounded border-[1px]" onClick={onClose}>Close</button>
            </div>
          </div>
        </div>
      ) : null}
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
                    className="mt-[12rem] mb-[1rem] h-14 mx-auto w-[200px] z-10"
                    src="/images/sponsors/tmb.png"
                  />
                  <p className=" text-center  text-white font-ubuntu text-2xl">
                    presents
                  </p>
                  <img
                    src="/vectors/invente.svg"
                    className="mt-[2rem] mb-[5rem] scale-[1.7]"
                  />
                  <p className="text-center text-white font-ubuntu text-2xl">
                    Powered by
                  </p>
                  <img
                    className="mt-5 mb-10 h-10 mx-auto w-[250px] z-10"
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

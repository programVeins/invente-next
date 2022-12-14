import Link from "next/link";
import React, { useState } from "react";
import BlurryCircle from "../components/blurry-circle";
import Button from "../components/button";
import Footer from "../components/footer";
import Header from "../components/header/header";
import VectorsBG from "../components/vectors-bg";

const Passes = () => {
  const [passes, setPasses] = useState([
    {
      name: "Event Pass",
      amount: 300,
      link: "events",
    },
    {
      name: "Workshop Pass",
      amount: 250,
      link: "workshop",
    },
    {
      name: "Bulk Pass (per head)",
      amount: 275,
      link: "bulk",
    },
    {
      name: "Hackathon Pass",
      amount: 300,
      link: "hack",
    },
  ]);
  return (
    <div className="bg-background min-h-screen">
      <main>
        <Header />
        <VectorsBG />
        <BlurryCircle />

        <section>
          <h1 className="text-2xl md:text-5xl font-azonix text-white mt-40 text-center">
            Passes
          </h1>
          <div className="grid gap-20 mt-20 mb-20 grid-cols-1 lg:grid-cols-2 w-3/4 mx-auto text-white">
            {passes.map((pass, i) => (
              <Link href={`/passes-info/${pass.link}`}>
                <div
                  key={i}
                  className="w-full cursor-pointer flex flex-col h-full py-10 lg:px-20 justify-between flurry-bg text-center shadow-xl border-[0.02rem] border-gray-400 border-opacity-20 bg-black/20 rounded-md lg:rounded-xl backdrop-blur-lg"
                >
                  <p className="font-aspace text-xl py-2">{pass.name}</p>
                  <p className="font-aspace text-5xl py-2 font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-600 shadow-blue-500">
                    ₹{pass.amount}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <p className="text-white text-lg font-ubuntu my-20 text-center mx-auto">
            For any query regarding registration/payment, contact:
            <br />
            Sowmick Rakesh S - 95008 22248
            <br />
            Manish KS - 86101 00305
            <br />
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Passes;

import React, { useState } from "react";
import BlurryCircle from "../components/blurry-circle";
import Footer from "../components/footer";
import Header from "../components/header/header";
import VectorsBG from "../components/vectors-bg";

const Passes = () => {
  const [passes, setPasses] = useState([
    {
      name: "Event Pass",
      amount: 300,
    },
    {
      name: "Workshop Pass",
      amount: 250,
    },
    {
      name: "Bulk Pass (per head)",
      amount: 275,
    },
    {
      name: "Hackathon Pass",
      amount: 300,
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
          <div className="grid gap-10 mt-20 mb-40 grid-cols-4 w-3/4 mx-auto text-white">
            {passes.map((pass, i) => (
              <div
                key={i}
                className="w-full flex flex-col h-full justify-between flurry-bg text-center shadow-xl border-[0.02rem] border-gray-400 border-opacity-20 bg-black/20 rounded-md lg:rounded-xl backdrop-blur-lg"
              >
                <p className="font-aspace text-xl py-10">{pass.name}</p>
                <p className="font-aspace text-5xl py-10 font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-600 shadow-blue-500">
                  ₹{pass.amount}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Passes;

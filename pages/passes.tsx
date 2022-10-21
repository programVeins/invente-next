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
          <div className="grid gap-20 mt-20 mb-20 grid-cols-1 lg:grid-cols-2 w-3/4 mx-auto text-white">
            {passes.map((pass, i) => (
              <a href="https://axisbpayments.razorpay.com/ssn-snuc-Invente">
                <div
                  key={i}
                  className="w-full cursor-pointer flex flex-col h-full py-10 px-20 justify-between flurry-bg text-center shadow-xl border-[0.02rem] border-gray-400 border-opacity-20 bg-black/20 rounded-md lg:rounded-xl backdrop-blur-lg"
                >
                  <p className="font-aspace text-xl py-2">{pass.name}</p>
                  <p className="font-aspace text-5xl py-2 font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-600 shadow-blue-500">
                    ₹{pass.amount}
                  </p>
                </div>
              </a>
            ))}
          </div>
          <p className="font-ubuntu px-10 lg:px-0 text-2xl text-white text-center mb-4">
            {" "}
            Please upload your receipts in this link!
          </p>
          <div className="flex w-full justify-center mb-20">
            <Button disabled>Upload</Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Passes;

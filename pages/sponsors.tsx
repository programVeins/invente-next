import React from "react";
import BlurryCircle from "../components/blurry-circle";
import Button from "../components/button";
import Footer from "../components/footer";
import Header from "../components/header/header";
import Heading from "../components/heading";
import VectorsBG from "../components/vectors-bg";

const SponsorsPage = () => {
  return (
    <div className="bg-background min-h-screen">
      <main>
        <Header />
        <VectorsBG />
        <BlurryCircle />

        <section>
          <h1 className="text-2xl md:text-5xl font-azonix text-white mt-40 text-center">
            Sponsors
          </h1>
          <div className="font-ubuntu z-10 lg:text-2xl text-white w-2/3 mx-auto">
            <div className="flex flex-col w-1/2 mx-auto text-center gap-10 mt-20">
              <p>Title Sponsor</p>
              <img
                className="h-20 z-10 lg:h-40"
                src="/images/sponsors/tmb.png"
              />
              <p>Co Sponsor</p>
              <img
                className="h-10 z-10 lg:h-20"
                src="/images/sponsors/sattva.png"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-20 place-content-center place-items-center gap-40">
              <img className="z-10 w-full" src="/images/sponsors/celcom.png" />
              <img className="z-10 w-full" src="/images/sponsors/sac.png" />
              <img className="z-10 w-full" src="/images/sponsors/do.png" />
              <img className="z-10 w-full" src="/images/sponsors/ieee.png" />
              <img className="z-10 w-full" src="/images/sponsors/in2.png" />
              <img
                className="z-10 w-full"
                src="/images/sponsors/rocketlane.svg"
              />
              <img className="z-10 w-full" src="/images/sponsors/nat.png" />
              <img className="z-10 w-full" src="/images/sponsors/cgvak.png" />
              <img className="z-10 w-full" src="/images/sponsors/ts.svg" />
              <img className="z-10 w-full" src="/images/sponsors/toyota.png" />
              <img className="z-10 w-full" src="/images/sponsors/suba.png" />
              <img className="z-10 w-full" src="/images/sponsors/treat.png" />
              <img className="z-10 w-full" src="/images/sponsors/kalai.jpg" />
              <img className="z-10 w-full" src="/images/sponsors/rah.png" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SponsorsPage;

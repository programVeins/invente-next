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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-20 place-content-center place-items-center gap-20">
              <img src="/images/sponsors/tmb.png" />
              <img src="/images/sponsors/sattva.png" />
              <img src="/images/sponsors/celcom.png" />

              <img src="/images/sponsors/sac.png" />
              <img src="/images/sponsors/do.png" />
              <img src="/images/sponsors/ieee.png" />
              <img src="/images/sponsors/in2.png" />
              <img src="/images/sponsors/nat.png" />
              <img src="/images/sponsors/cgvak.png" />
            </div>
            <div className="flex justify-center mb-40">
              <img src="/images/sponsors/ts.svg" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SponsorsPage;

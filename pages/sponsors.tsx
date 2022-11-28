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
            <div className="flex flex-col w-full mx-auto text-center gap-10 mt-20">
              <div className="w-full z-10 md:w-1/2 mx-auto">
                <p className="mb-4">Title Sponsor</p>
                <img
                  className="h-40 z-10 lg:h-40"
                  src="/images/sponsors/tmb.png"
                />
              </div>

              <p>Powered By</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-20 w-full">
                <div className="flex z-10 flex-col justify-center">
                  <img
                    className="z-10 h-24 w-full"
                    src="/images/sponsors/sattva.png"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <img
                    className="z-10 w-full rounded-3xl"
                    src="/images/sponsors/suba.png"
                  />
                </div>
              </div>
            </div>

            <p className="mt-20 text-center">Sponsors</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 mb-20 place-content-center place-items-center gap-40">
              <img className="z-10 w-full" src="/images/sponsors/celcom.png" />
              <img
                className="z-10 w-full rounded-3xl"
                src="/images/sponsors/cgvak.png"
              />

              <img className="z-10 w-full" src="/images/sponsors/do.png" />
              <img
                className="z-10 w-full rounded-3xl"
                src="/images/sponsors/dukes.png"
              />

              <img className="z-10 w-full" src="/images/sponsors/ieee.png" />
              <img className="z-10 w-full" src="/images/sponsors/in2.png" />

              <img
                className="z-10 w-full rounded-3xl"
                src="/images/sponsors/kalai.jpg"
              />

              <img className="z-10 w-full" src="/images/sponsors/leo.png" />

              <img
                className="z-10 w-full"
                src="/images/sponsors/magilhub.png"
              />
              <img
                className="z-10 w-full rounded-3xl"
                src="/images/sponsors/manya.png"
              />

              <img className="z-10 w-full" src="/images/sponsors/nat.png" />

              <img
                className="z-10 w-full rounded-3xl"
                src="/images/sponsors/paysprint.png"
              />

              <img
                className="z-10 w-full"
                src="/images/sponsors/rocketlane.svg"
              />
              <img
                className="z-10 w-full rounded-3xl"
                src="/images/sponsors/rah.png"
              />

              <img
                className="z-10 w-full rounded-3xl"
                src="/images/sponsors/saarc.jpg"
              />
              <img className="z-10 w-1/2" src="/images/sponsors/sac.png" />
              <img className="z-10 w-full" src="/images/sponsors/sakthi.png" />
              <img className="z-10 w-full" src="/images/sponsors/servo.png" />

              <img className="z-10 w-3/4" src="/images/sponsors/toyota.png" />
              <img className="z-10 w-full" src="/images/sponsors/treat.png" />
              <img className="z-10 w-full" src="/images/sponsors/ts.svg" />

              <img className="z-10 w-full" src="/images/sponsors/zenecks.png" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SponsorsPage;

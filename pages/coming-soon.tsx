import React from "react";
import BlurryCircle from "../components/blurry-circle";
import Footer from "../components/footer";
import Header from "../components/header/header";
import VectorsBG from "../components/vectors-bg";

const ComingSoon = () => {
  return (
    <div className="bg-background min-h-screen">
      <main>
        <Header />
        {/* <VectorsBG /> */}
        <BlurryCircle />

        <section>
          <div className="">
            <h1 className="text-3xl lg:text-7xl text-white animate-pulse flex h-screen justify-center items-center font-azonix">
              <p className="awesome-stuff">Coming Soon</p>
            </h1>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ComingSoon;

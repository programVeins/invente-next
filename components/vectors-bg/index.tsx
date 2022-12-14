import React from "react";

export default function VectorsBG() {
  return (
    <div className="fixed blur-[0.04rem] max-w-screen overflow-hidden">
      <div className="">
        <img
          src="/vectors/gridbg.svg"
          className="scale-[5] sm:scale-[2] md:scale-150 lg:scale-100"
        />
      </div>
      <div className="mt-[150vw] sm:mt-[80vw] md:mt-[40vw] lg:mt-10">
        <img
          src="/vectors/dotmatrix.svg"
          className="scale-[3] sm:scale-[2] md:scale-150 lg:scale-100"
        />
      </div>
    </div>
  );
}

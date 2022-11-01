import Link from "next/link";
import React from "react";

const BlurryJumbotron = () => {
  return (
    <div className="w-3/4 mx-auto rounded-lg lg:rounded-none lg:w-full border-[0.02rem] border-gray-400 border-opacity-20 bg-black/20 backdrop-blur-lg">
      <div className="flex flex-col lg:flex-row gap-10 items-center font-ubuntu text-white text-left w-3/5 mx-auto py-10">
        <div className="lg:w-1/3">
          <div className="flex justify-center lg:justify-start">
            <i
              dangerouslySetInnerHTML={{
                __html: `<ion-icon class="text-5xl pb-2" name="bulb"></ion-icon>`,
              }}
            ></i>
          </div>
          <Link className="" href="/events">
            <div className="text-lg lg:w-fit font-space flex gap-5 items-center justify-between mb-2 cursor-pointer text-cyan-500 rounded-lg px-2 py-1 bg-sky-700/30 font-bold">
              <div>Events</div>{" "}
              <i
                dangerouslySetInnerHTML={{
                  __html: `<ion-icon
                  class="caret-move mt-2"
                  name="caret-forward-outline"
                ></ion-icon>`,
                }}
              ></i>
            </div>
          </Link>
          <p>
            Check out all the events that our departments have to offer.
            Participate and get the chance to win exciting prizes 🤑 among
            experience and exposure!
          </p>
        </div>
        <div className="lg:w-1/3">
          <div className="flex justify-center lg:justify-start">
            <i
              dangerouslySetInnerHTML={{
                __html: `<ion-icon class="text-5xl pb-2" name="tv"></ion-icon>`,
              }}
            ></i>
          </div>
          <Link href="/workshops">
            <div className="text-lg lg:w-fit font-space flex gap-5 items-center justify-between mb-2 cursor-pointer text-yellow-500 rounded-lg px-2 py-1 bg-amber-700/30 font-bold">
              <div>Workshops</div>{" "}
              <i
                dangerouslySetInnerHTML={{
                  __html: `<ion-icon
                  class="caret-move mt-2"
                  name="caret-forward-outline"
                ></ion-icon>`,
                }}
              ></i>
            </div>
          </Link>
          <p>
            There are tonnes of workshops that you can attend to greatly enhance
            your skills on several technical domains. Sign up to clash shoulders
            with the best minds.
          </p>
        </div>
        <div className="lg:w-1/3">
          <div className="flex justify-center lg:justify-start">
            <i
              dangerouslySetInnerHTML={{
                __html: `<ion-icon class="text-5xl pb-2" name="hammer"></ion-icon>`,
              }}
            ></i>
          </div>
          <Link href="/hackathon">
            <div className="text-lg lg:w-fit font-space flex gap-5 items-center justify-between mb-2 cursor-pointer text-pink-500 rounded-lg px-2 py-1 bg-rose-700/30 font-bold">
              <div>Hackathons</div>{" "}
              <i
                dangerouslySetInnerHTML={{
                  __html: `<ion-icon
                  class="caret-move mt-2"
                  name="caret-forward-outline"
                ></ion-icon>`,
                }}
              ></i>
            </div>
          </Link>
          <p>
            Test your building skills in our flagship hackathons. From building
            your product to forming a great market strategy, gear up and get
            ready for{" "}
            <span className="decoration-teal-500 underline font-bold underline-offset-2">
              #nosleeptillsuccess
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlurryJumbotron;

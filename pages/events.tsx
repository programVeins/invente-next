import Link from "next/link";
import React from "react";
import BlurryCircle from "../components/blurry-circle";
import Footer from "../components/footer";
import Header from "../components/header/header";
import VectorsBG from "../components/vectors-bg";
import { depts } from "./index";
type Props = {};

const events = (props: Props) => {
  return (
    <div>
      <Header />
      <VectorsBG />
      <BlurryCircle />
      <h1 className="text-3xl text-white font-azonix text-center mt-40">
        Events
      </h1>
      <p className="text-white px-4 font-ubuntu my-10 text-left lg:text-center text-lg">
        Check out various events in SSNSNUC Invente brought to you by each
        department. Choose a department to see what they have to offer!
      </p>
      <div className="grid mt-20 mb-40 grid-cols-1 lg:grid-cols-3 gap-10 w-3/4 mx-auto">
        {depts.map((dept, i) => (
          <Link href={dept.link}>
            <div className="flex-col p-10 hover:scale-110 hover:shadow-2xl duration-300 ease-out cursor-pointer items-center justify-center shadow-xl border-[0.02rem] border-gray-400 border-opacity-20 bg-black/20 rounded-md lg:rounded-xl backdrop-blur-lg">
              <h2 className="text-white text-center text-xl font-ubuntu">
                {dept.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default events;

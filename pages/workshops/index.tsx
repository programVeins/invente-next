import Link from "next/link";
import React from "react";
import BlurryCircle from "../../components/blurry-circle";
import Footer from "../../components/footer";
import Header from "../../components/header/header";
import VectorsBG from "../../components/vectors-bg";

type Props = {};

const workshops = [
  {
    name: "AI/ML Workshop",
    link: "/workshops/ai-ml",
  },
  {
    name: "Coming Soon",
    link: "/coming-soon",
  },
  {
    name: "Coming Soon",
    link: "/coming-soon",
  },
];

const WorkshopPage = (props: Props) => {
  return (
    <div>
      <Header />
      <VectorsBG />
      <BlurryCircle />
      <h1 className="text-3xl text-white font-azonix text-center mt-40">
        Workshops
      </h1>
      <p className="text-white px-4 font-ubuntu my-10 text-left lg:text-center text-lg">
        Check out various workshops that we have to offer this Invente! Choose a
        workshop to see more details
      </p>
      <div className="grid mt-20 mb-40 grid-cols-1 lg:grid-cols-3 gap-10 w-3/4 mx-auto">
        {workshops.map((dept, i) => (
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

export default WorkshopPage;

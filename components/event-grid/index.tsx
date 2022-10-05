import Link from "next/link";
import React, { FC } from "react";
import Heading from "../heading";

interface Department {
  name: string;
  img: string;
  link: string;
}
interface Props {
  depts: Department[];
}

const EventGrid: FC<Props> = ({ depts }) => {
  return (
    <div className="py-20">
      <Heading title="events" />
      <div className="grid grid-cols-4 gap-10 place-items-center my-10">
        {depts.map((dept, i) => (
          <Link href={dept.link}>
            <div
              key={i}
              className="relative scale-95 hover:scale-110 transition-all ease-out cursor-pointer duration-300"
            >
              <img className="m-0 p-0 " src={dept.img} />
              <div className="absolute text-white bottom-5 justify-center flex items-center left-0 right-0 mx-auto z-10 bg-black/30 backdrop-blur-md w-3/4 rounded-full  h-10">
                <p className="text-2xl font-aspace font-bold">{dept.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventGrid;

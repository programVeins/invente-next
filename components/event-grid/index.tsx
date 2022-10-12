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
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10 place-items-center my-10">
        {depts.map((dept, i) => (
          <Link key={i} href={dept.link}>
            <div className="flex flex-col lg:flex-row h-80 lg:h-40 w-full hover:scale-110 hover:shadow-2xl duration-300 ease-out cursor-pointer items-center justify-start shadow-xl border-[0.02rem] border-gray-400 border-opacity-20 bg-black/20 rounded-md lg:rounded-xl backdrop-blur-lg">
              <img
                src={dept.img}
                alt={dept.name}
                className="w-40 h-40 rounded-t-md lg:rounded-l-xl"
              />
              <h2 className="text-white py-6 lg:py-0 px-4 text-left text-lg lg:text-xl font-ubuntu">
                {dept.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EventGrid;

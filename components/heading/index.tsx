import React from "react";

type Props = {
  title: string;
};

const Heading = ({ title }: Props) => {
  return (
    <div>
      <h2 className="font-azonix text-cyan-300 text-3xl">{title}</h2>
      <hr className="w-40 border-t-2 mt-4 border-cyan-300" />
    </div>
  );
};

export default Heading;

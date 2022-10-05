import React, { useEffect, useState } from "react";

const BlurryCircle = () => {
  const [colors, setcolors] = useState([
    "bg-sky-500",
    "bg-teal-500",
    "bg-green-500",
    "bg-amber-500",
    "bg-rose-500",
    "bg-pink-500",
    "bg-fuchsia-500",
    "bg-violet-500",
    "bg-indigo-500",
    "bg-blue-500",
  ]);

  const [activeColor, setActiveColor] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (activeColor === colors.length - 1) {
        setActiveColor(0);
      } else {
        setActiveColor(activeColor + 1);
      }
    }, 1500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="w-screen flex justify-center">
      <div
        className={`rounded-full h-[600px] w-[600px] transition-colors duration-1000 ${colors[activeColor]}  blur-[300px] absolute -bottom-80`}
      ></div>
    </div>
  );
};

export default BlurryCircle;

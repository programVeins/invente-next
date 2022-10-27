import React, { useEffect, useState } from "react";

const CountDown = () => {
  const inventeDate = new Date();
  inventeDate.setFullYear(2022);
  inventeDate.setMonth(10);
  inventeDate.setDate(3);
  inventeDate.setHours(0);
  inventeDate.setMinutes(0);

  const [daysDiff, setdaysDiff] = useState(0);
  const [hoursDiff, sethoursDiff] = useState(0);
  const [minutesDiff, setminutesDiff] = useState(0);
  const [secondsDiff, setsecondsDiff] = useState(0);

  useEffect(() => {
    if (inventeDate.getTime() - new Date().getTime() > 0) {
      const timer = setInterval(() => {
        const msDiff = inventeDate.getTime() - new Date().getTime();

        const daysDiff = Math.trunc(msDiff / (1000 * 3600 * 24));
        setdaysDiff(daysDiff);
        sethoursDiff(23 - new Date().getHours());
        setminutesDiff(59 - new Date().getMinutes());
        setsecondsDiff(59 - new Date().getSeconds());
      }, 1000);
      return () => {
        clearInterval(timer);
      };
    }
  });

  return (
    <div className="flex gap-4 px-2 lg:grid w-full lg:w-3/4 xl:w-1/2 mx-auto lg:grid-cols-4 text-white font-azonix text-lg lg:text-3xl place-items-center">
      <div className="lg:h-28 lg:w-40 p-4 w-1/4 flex lg:flex-row flex-col items-center justify-center shadow-xl border-[0.02rem] border-gray-400 border-opacity-20 bg-black/20 rounded-md lg:rounded-xl backdrop-blur-lg">
        <p>{daysDiff}</p>
        <p className="text-xs lg:text-sm lg:mx-2">Days</p>
      </div>
      <div className="lg:h-28 lg:w-40 p-4 w-1/4 flex lg:flex-row flex-col items-center justify-center shadow-xl border-[0.02rem] border-gray-400 border-opacity-20 bg-black/20 rounded-md lg:rounded-xl backdrop-blur-lg">
        <p>{hoursDiff}</p>
        <p className="text-xs lg:text-sm lg:mx-2">Hours</p>
      </div>
      <div className="lg:h-28 lg:w-40 p-4 w-1/4 flex lg:flex-row flex-col items-center justify-center shadow-xl border-[0.02rem] border-gray-400 border-opacity-20 bg-black/20 rounded-md lg:rounded-xl backdrop-blur-lg">
        <p>{minutesDiff}</p>
        <p className="text-xs lg:text-sm lg:mx-2">Minutes</p>
      </div>
      <div className="lg:h-28 lg:w-40 p-4 w-1/4 flex lg:flex-row flex-col items-center justify-center shadow-xl border-[0.02rem] border-gray-400 border-opacity-20 bg-black/20 rounded-md lg:rounded-xl backdrop-blur-lg">
        <p>{secondsDiff}</p>
        <p className="text-xs lg:text-sm lg:mx-2">Seconds</p>
      </div>
    </div>
  );
};

export default CountDown;

import React, { useState } from "react";

const EventPage = () => {
  const [selectedEvent, setSelectedEvent] = useState("");

  return (
    <div>
      <h1 className="text-3xl text-white font-azonix text-center mt-40">
        Department of Information Technology
      </h1>
      <div className="flex gap-10 text-white my-10 w-3/4 mx-auto">
        <div className="w-3/12 p-10 bg-black/20 rounded-md backdrop-blur-md">
          {/* <ul>
            {itEvents.map((event, i) => (
              <li
                className="font-ubuntu font-thin flex items-center cursor-pointer my-10 text-xl transition-all duration-300 hover:font-bold"
                key={i}
              >
                <ion-icon name="ribbon-outline"></ion-icon>&nbsp;
                {event}
              </li>
            ))}
          </ul> */}
        </div>
        {/* <div className="w-9/12 p-10 bg-black/20 rounded-md backdrop-blur-md">
          <h3 className="font-ubuntu font-bold text-2xl">{ev.title}</h3>
          <p className="font-ubuntu mt-8">{ev.desc}</p>
          <div className="flex gap-10 justify-between items-center my-10">
            <div className="text-center w-1/4">
              <ion-icon
                name="person-circle-outline"
                className=""
                size="large"
              ></ion-icon>
              <p className="font-ubuntu">{ev.type}</p>
            </div>
            <div className="text-center w-1/4">
              <ion-icon name="people-circle-outline" size="large"></ion-icon>
              <p className="font-ubuntu">{ev.teamSize}</p>
            </div>
            <div className="text-center w-1/4">
              <ion-icon name="navigate-circle-outline" size="large"></ion-icon>
              <p className="font-ubuntu">{ev.venue}</p>
            </div>
            <div className="text-center w-1/4">
              <ion-icon name="alarm-outline" size="large"></ion-icon>
              <p className="font-ubuntu">{ev.time}</p>
            </div>
          </div>
          {Object.entries(ev.meta).map((item) => {
            if (Array.isArray(item[1]))
              return (
                <>
                  <p className="font-ubuntu text-xl font-semibold mt-4 mb-2">
                    {item[0]}
                  </p>
                  {item[1].map((rule) => (
                    <li className="font-ubuntu font-thin my-2 list-awesome">
                      {rule}
                    </li>
                  ))}
                </>
              );
            else
              return (
                <>
                  <p className="font-ubuntu text-xl font-semibold mt-4 mb-2">
                    {item[0]}
                  </p>
                  <p className="font-ubuntu font-thin">{item[1]}</p>
                </>
              );
          })}
        </div> */}
      </div>
    </div>
  );
};

export default EventPage;

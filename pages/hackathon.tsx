import axios from "axios";
import React, { useEffect, useState } from "react";
import BlurryCircle from "../components/blurry-circle";
import Footer from "../components/footer";
import Header from "../components/header/header";
import VectorsBG from "../components/vectors-bg";
import { Department, Event, EventType } from "../types";

type Props = {};

const HackathonPage = (props: Props) => {
  const [selectedEventDetails, setSelectedEventDetails] = useState<Event>({
    id: "",
    event_name: "",
    description: "",
    type: EventType.Team,
    size: "",
    department: Department.ECE,
    venue: "",
    time: "",
    sections: {},
  });

  useEffect(() => {
    const async = async () => {
      const res = await axios.get("/api/events/hack");
      setSelectedEventDetails(res.data.events);
    };

    async().then(() => {});
  }, []);

  return (
    <div className="bg-background min-h-screen">
      <main>
        <Header />
        <VectorsBG />
        <BlurryCircle />

        <div className="text-white p-10 mx-2 lg:mx-auto rounded-lg my-40 lg:w-3/4  backdrop-blur-md bg-black/30 border-[0.02rem] border-gray-400 border-opacity-20">
          <h3 className="font-ubuntu font-bold text-2xl">
            {selectedEventDetails?.event_name}
          </h3>
          <p className="font-ubuntu mt-8">
            {selectedEventDetails?.description}
          </p>
          <div className="grid grid-cols-2 gap-y-10 lg:gap-y-0 place-items-center lg:flex lg:gap-10 justify-between items-center my-10">
            <div className="text-center lg:w-1/4">
              <p className="font-ubuntu mb-2">Team Type</p>
              <i
                dangerouslySetInnerHTML={{
                  __html: `<ion-icon
                  name="person-circle-outline"
                  size="large"
                ></ion-icon>`,
                }}
              ></i>
              <p className="font-ubuntu">
                {selectedEventDetails?.size == "1"
                  ? "Individual"
                  : selectedEventDetails?.size.includes("1")
                  ? "Team or Solo"
                  : "Team"}
              </p>
            </div>
            <div className="text-center lg:w-1/4">
              <p className="font-ubuntu mb-2">Team Size</p>
              <i
                dangerouslySetInnerHTML={{
                  __html: `<ion-icon
                  name="people-circle-outline"
                  size="large"
                ></ion-icon>`,
                }}
              ></i>
              <p className="font-ubuntu">
                {selectedEventDetails?.size ?? "TBD"}
              </p>
            </div>
            <div className="text-center lg:w-1/4">
              <p className="font-ubuntu mb-2">Venue</p>
              <i
                dangerouslySetInnerHTML={{
                  __html: `<ion-icon
                  name="navigate-circle-outline"
                  size="large"
                ></ion-icon>`,
                }}
              ></i>
              <p className="font-ubuntu">{selectedEventDetails?.venue}</p>
            </div>
            <div className="text-center lg:w-1/4">
              <p className="font-ubuntu mb-2">Time</p>
              <i
                dangerouslySetInnerHTML={{
                  __html: `<ion-icon
                  name="alarm-outline"
                  size="large"
                ></ion-icon>`,
                }}
              ></i>

              <p className="font-ubuntu">{selectedEventDetails?.time}</p>
            </div>
          </div>
          {selectedEventDetails?.sections &&
            selectedEventDetails?.sections?.values?.map(
              (
                section: {
                  sectionData: string;
                  sectionName: string;
                },
                i: any
              ) => {
                const dataString = section.sectionData;
                const dataPieces = dataString.split("#");

                return (
                  <>
                    <p className="font-ubuntu text-xl font-semibold mt-4 mb-2">
                      {section?.sectionName}
                    </p>
                    {dataPieces.map((piece, i) => {
                      if (dataPieces.length == 1) {
                        return (
                          <p className="font-ubuntu text-lg" key={i}>
                            {piece}
                          </p>
                        );
                      }

                      if (piece != "")
                        return (
                          <li className="font-ubuntu font-thin my-2 bulls">
                            {piece}
                          </li>
                        );
                    })}
                  </>
                );
              }
            )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HackathonPage;

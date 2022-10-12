import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import BlurryCircle from "../../components/blurry-circle";
import Footer from "../../components/footer";
import Header from "../../components/header/header";
import Loader from "../../components/loader";
import VectorsBG from "../../components/vectors-bg";
import { Department, Event, EventType } from "../../types";

const BLACKLIST = [
  "Desvity",
  "Medical Merchandise ",
  "Sysops",
  "Kadhai Kelu",
  "Codera",
];
export const departments = [
  "CSE",
  "IT",
  "ECE",
  "EEE",
  "MECH",
  "CHEM",
  "CIVIL",
  "BME",
];

export const itEvents = [
  "Code Wars",
  "Decrypt",
  "CSS Battle",
  "Websitica",
  "Sysops",
];

const EventPage = () => {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
  const [selectedEventDetails, setSelectedEventDetails] = useState<Event>({
    id: "",
    event_name: "",
    description: "",
    type: EventType.Individual,
    size: "",
    department: Department.CSE,
    venue: "",
    time: "",
    sections: {},
  });
  const router = useRouter();
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const [department, setDepartment] = useState("");

  useEffect(() => {
    const { name } = router.query;
    setDepartment(name as string);
  }, [router]);

  useEffect(() => {
    if (selectedEvent != null) {
      setSelectedEventDetails(events[selectedEvent]);
    }
  }, [selectedEvent, events, department]);

  useEffect(() => {
    if (department != "") {
      const res = axios.get(`/api/events/${department}`).then((res) => {
        const validEvents = [];
        for (const event of res.data.events) {
          if (event.description) {
            if (!BLACKLIST.includes(event.event_name)) {
              validEvents.push(event);
            }
          }
        }
        setEvents(validEvents);
        setSelectedEvent(0);
        setLoading(false);
      });
    }
  }, [department]);

  return (
    <div>
      <Header />
      <VectorsBG />
      <BlurryCircle />
      <h1 className="text-3xl text-white font-azonix text-center mt-40">
        Department of {department?.split("-").join(" ")}{" "}
        {department != "information-technology" &&
        department != "snu-commerce" &&
        department.split("-")[department.split("-").length - 1] != "engineering"
          ? "Engineering"
          : ""}
      </h1>
      {loading && (
        <div className="flex items-center justify-center my-40">
          <Loader />
        </div>
      )}
      {!loading && (
        <div className="flex flex-col lg:flex-row w-11/12 lg:w-5/6 mx-auto gap-10 my-10">
          <div className="text-white lg:overflow-auto overflow-scroll lg:p-10 rounded-lg lg:w-1/4  backdrop-blur-md bg-black/30 border-[0.02rem] border-gray-400 border-opacity-20">
            <ul className="flex lg:flex-col px-2 gap-10 lg:gap-0 flex-row w-full justify-between">
              {events.map((event, i) => (
                <li
                  className="font-ubuntu min-w-fit lg:w-auto font-thin flex items-center cursor-pointer my-10 text-xl transition-all duration-300 hover:font-bold"
                  key={i}
                  onClick={() => setSelectedEvent(i)}
                >
                  <i
                    className="text-2xl mt-1"
                    dangerouslySetInnerHTML={{
                      __html: `<ion-icon
                  name="caret-forward-outline"
                ></ion-icon>`,
                    }}
                  ></i>
                  {event.event_name}
                </li>
              ))}
            </ul>
          </div>
          <div className="text-white p-10 rounded-lg lg:w-3/4  backdrop-blur-md bg-black/30 border-[0.02rem] border-gray-400 border-opacity-20">
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
                  {selectedEventDetails?.type ?? "TBD"}
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
                  section: { sectionData: string; sectionName: string },
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
        </div>
      )}
      <Footer />
    </div>
  );
};

export default EventPage;

import { Event, pass } from "@prisma/client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Department, Section } from "../../types";
import Button from "../button";
import { Prisma } from "@prisma/client";
import { useAuth } from "../../lib/authContext";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";

const EventsData = () => {
  const router = useRouter();
  const [data, setData] = useState<Event>({
    id: 0,
    event_name: "",
    description: "",
    pass: pass.tech,
    size: "",
    department: Department.CSE,
    venue: "",
    time: "",
    sections: { values: [] },
  });
  const [sections, setSections] = useState<Section[]>([]);

  const { user, logout } = useAuth();

  useEffect(() => {
    const async = async () => {
      console.log(await user?.getIdToken());
      const res = await axios.get("/api/eventDeets", {
        headers: {
          Authorization: `Bearer ${await user?.getIdToken()}`,
        },
      });
      setData({
        id: res.data.event.id,
        event_name: res.data.event.event_name,
        description: res.data.event.description ?? "",
        pass: res.data.event.pass ?? pass.tech,
        size: res.data.event.size ?? "",
        department: res.data.event.department,
        venue: res.data.event.venue ?? "TBD",
        time: res.data.event.time ?? "TBD",
        sections: res.data.event.sections ?? { values: [] },
      });
      setSections(res.data.event.sections?.values ?? []);
      console.log(data.department, res.data.event.department);
    };
    async()
      .then(() => {})
      .catch((err) => {
        console.log(err);
        logout().then(() => router.push("/login"));
      });
  }, []);

  return (
    <div>
      <h1 className="text-5xl font-azonix text-white mt-40 text-center">
        Event Data Collection
      </h1>

      <div className="bg-white/10 my-20 flex mx-auto backdrop-blur-md shadow-2xl shadow-black/40 rounded-lg w-1/2 border-white">
        <form className="flex flex-col w-full p-10 mx-auto items-center justify-center">
          <label className="text-white text-left w-3/4 font-ubuntu">
            Title
          </label>
          <input
            required
            name="title"
            type="text"
            className="bg-white/10 w-3/4 shadow-inner shadow-black/50 backdrop-blur-md rounded-md text-white px-4 py-2 mt-2 mb-4"
            value={data.event_name}
            onChange={(e) => setData({ ...data, event_name: e.target.value })}
          />

          <label className="text-white text-left w-3/4 font-ubuntu">
            Description
          </label>
          <textarea
            required
            name="desc"
            className="bg-white/10 w-3/4 shadow-inner shadow-black/50 backdrop-blur-md rounded-md text-white px-4 py-2 mt-2 mb-4"
            value={data.description as string}
            onChange={(e) => setData({ ...data, description: e.target.value })}
          />

          <label className="text-white text-left w-3/4 font-ubuntu">Type</label>
          <select
            required
            name="type"
            className="bg-white/10 w-3/4 shadow-inner shadow-black/50 backdrop-blur-md rounded-md text-white px-4 py-2 mt-2 mb-4"
            value={data.pass}
            onChange={(e) =>
              setData({
                ...data,
                pass: e.target.value as pass,
              })
            }
          >
            <option value={pass.tech}>Technical</option>
            <option value={pass.nonTech}>Non-Technical</option>
            <option value={pass.wsCentral}>Workshop</option>
          </select>

          <label className="text-white text-left w-3/4 font-ubuntu">
            Team Size
          </label>
          <input
            required
            name="teamSize"
            type="text"
            className="bg-white/10 w-3/4 shadow-inner shadow-black/50 backdrop-blur-md rounded-md text-white px-4 py-2 mt-2 mb-4"
            value={data.size as string}
            onChange={(e) => setData({ ...data, size: e.target.value })}
          />

          <label className="text-white text-left w-3/4 font-ubuntu">
            Department
          </label>
          <select
            required
            name="dept"
            className="bg-white/10 w-3/4 shadow-inner shadow-black/50 backdrop-blur-md rounded-md text-white px-4 py-2 mt-2 mb-4"
            value={data.department}
            onChange={(e) =>
              setData({
                ...data,
                department: e.target.value as Department,
              })
            }
          >
            <option value={Department.CSE}>CSE</option>
            <option value={Department.IT}>IT</option>
            <option value={Department.ECE}>ECE</option>
            <option value={Department.EEE}>EEE</option>
            <option value={Department.MECH}>MECH</option>
            <option value={Department.CHEM}>CHEM</option>
            <option value={Department.CIVIL}>CIVIL</option>
            <option value={Department.BME}>BME</option>
            <option value={Department.BCOM}>BCOM</option>
          </select>

          <label className="text-white text-left w-3/4 font-ubuntu">
            Venue
          </label>
          <input
            required
            name="venue"
            type="text"
            className="bg-white/10 w-3/4 shadow-inner shadow-black/50 backdrop-blur-md rounded-md text-white px-4 py-2 mt-2 mb-4"
            value={data.venue as string}
            onChange={(e) => setData({ ...data, venue: e.target.value })}
          />

          <label className="text-white text-left w-3/4 font-ubuntu">Time</label>
          <input
            required
            name="time"
            type="text"
            className="bg-white/10 w-3/4 shadow-inner shadow-black/50 backdrop-blur-md rounded-md text-white px-4 py-2 mt-2 mb-4"
            value={data.time as string}
            onChange={(e) => setData({ ...data, time: e.target.value })}
          />
          <p className="font-ubuntu text-white mt-8">
            If you need bullet points, use '#' to separate the points. Eg:
            'rule1 is this#rule2 is this' Renders like this:
          </p>
          <ul className="list-awesome">
            <li className="font-ubuntu text-white">rule1 is this</li>
            <li className="font-ubuntu text-white">rule2 is this</li>
          </ul>
          <div className="flex gap-10">
            <Button
              sub
              classes="mt-4"
              action={() => {
                setSections([
                  ...sections,
                  { sectionName: "", sectionData: "" },
                ]);
              }}
            >
              Add Sections
            </Button>
            <Button
              sub
              classes="mt-4"
              action={() => {
                setSections([]);
              }}
            >
              Clear Sections
            </Button>
          </div>

          <div className="my-4 w-full">
            {sections.map((section, index) => (
              <section key={index} className="flex gap-10 items-center w-full">
                <input
                  required
                  name="sectionName"
                  type="text"
                  placeholder="Section Name"
                  className="bg-white/10 w-full shadow-inner shadow-black/50 backdrop-blur-md rounded-md text-white px-4 py-2 mt-2 mb-4"
                  value={section.sectionName}
                  onChange={(e) => {
                    const newSections = [...sections];
                    newSections[index].sectionName = e.target.value;
                    setSections(newSections);
                  }}
                />

                <input
                  required
                  name="sectionValue"
                  type="text"
                  placeholder="Section Value"
                  className="bg-white/10 w-full shadow-inner shadow-black/50 backdrop-blur-md rounded-md text-white px-4 py-2 mt-2 mb-4"
                  value={section.sectionData}
                  onChange={(e) => {
                    const newSections = [...sections];
                    newSections[index].sectionData = e.target.value;
                    setSections(newSections);
                  }}
                />
                <i
                  onClick={() => {
                    setSections(sections.filter((_, i) => i !== index));
                  }}
                  dangerouslySetInnerHTML={{
                    __html: `<ion-icon
                    class="text-2xl text-red-500 cursor-pointer"
                    name="close-circle"
                  ></ion-icon>`,
                  }}
                ></i>
              </section>
            ))}
          </div>

          <Button
            sub
            classes="mt-10 w-1/2"
            action={async () => {
              setData({
                ...data,
                sections: {
                  values: sections,
                } as unknown as Prisma.JsonValue,
              });
              console.log({
                ...data,
                sections: {
                  values: sections,
                } as unknown as Prisma.JsonValue,
              });

              await axios.post(
                "/api/eventDeets",
                {
                  ...data,
                  sections: {
                    values: sections,
                  } as unknown as Prisma.JsonValue,
                },
                {
                  headers: {
                    Authorization: `Bearer ${await user?.getIdToken()}`,
                  },
                }
              );
              toast.success("Event Updated Successfully");
            }}
          >
            Submit Event details
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EventsData;

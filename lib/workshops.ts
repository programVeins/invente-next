import { Department } from "./../types";
import { Event, EventType } from "../types";

export const getWorkshopDetails = (name: string) => {
  switch (name) {
    case "ai-ml":
      return {
        id: "ai-ml",
        event_name: "AI/ML Workshop",
        description: `Healthcare, Gaming, Home appliances, IOT, Automated Vehicles, Cars and so on....
        Do you know what all of them have in common? (Other than the fact that they are useful to all the people).
        They live and breathe ML algorithms!!! Are you starting off in game dev, software dev, or building intelligent softwares? Get yourself a headstart with this workshop
        Presenting you with a live hands-on session from the popular youtuber Siddhardhan.
        Who will be guiding in the field of AI starting off from the basics of AI to the top notches of ML. And the participants can come with just a laptop and no prerequisites.
        `,
        type: EventType.Team,
        size: "",
        department: Department.IT,
        venue: "Main Auditorium",
        time: "10 to 12",
        sections: {
          values: [
            {
              sectionName: "Workshop Benefits",
              sectionData:
                "100 USD Credits from Digital Ocean (valid for 60 days)#A certificate co-signed by SSN, SNU, ACM  and and IEEE club#Onspot Surprises.",
            },
            {
              sectionName: "About the Speaker",
              sectionData:
                "ML engineer at GAVs#Deals with real life ML models on healthcare#A popular Youtuber (posts ML related content)",
            },
          ],
        },
      } as Event;
  }
};

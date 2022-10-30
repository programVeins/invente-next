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

    case "optics":
      return {
        id: "optics",
        event_name: "Optics Workshop",
        description: `Optical sensors are used to detect light intensities and then translate them into a readble form . They are known to play a contributing factor to the rise of the Industry 4.0, focusing on vision, physical sensing, chemical sensing, and sensor multiplexing.  Fiber optic communications is one another most sought-after technology that they bring impact to. We are here to bring you a workshop on such a predominant innovation! SSNSNUC is here to help you give a hands-on experience and a lucid explanation on how to use MATLAB and Optigrating software to design optical sensors.This workshop will be conducted by an expert in this field, Dr.Srijith. K. He is an Assistant Professor in the Department of ECE at IIITDM Kancheepuram. His research interests are primarily in developing fiber optic sensor solutions for various applications using fiber Bragg gratings and distributed fiber optic sensors. Join us on November 3rd to explore the software tools and utilize this opportunity to the best!!`,
        type: EventType.Team,
        size: "",
        department: Department.IT,
        venue: "TBD",
        time: "TBD",
        sections: {
          values: [],
        },
      } as Event;

    case "fintech":
      return {
        id: "fintech",
        event_name: "Fintech Workshop",
        description: `The Invente fintech workshop is a platform for eager participants to learn the ways of fintech. The importance of Fintech is increasing day by day in this fast modernizing world, with many Fintech applications such as Google pay having made their way into our daily lives, the importance of understanding this field has increased tenfold. Interested participants will have the opportunity to interact with and learn from a professional with multiple years of experience in this field. This will help provide a practical understanding of the subject. This workshop promises to be not just an informative session, but also an interesting and unique experience for all involved`,
        type: EventType.Team,
        size: "",
        department: Department.IT,
        venue: "TBD",
        time: "TBD",
        sections: {
          values: [],
        },
      } as Event;
  }
};

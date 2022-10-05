import React from "react";
import BlurryCircle from "../components/blurry-circle";
import EventsData from "../components/events-data";
import Footer from "../components/footer";
import Header from "../components/header/header";
import VectorsBG from "../components/vectors-bg";

const EventsDataPage = () => {
  return (
    <div className="bg-background min-h-screen">
      <main>
        <Header />
        <VectorsBG />
        <BlurryCircle />

        <section>
          <EventsData />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EventsDataPage;

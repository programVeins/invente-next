import React from "react";
import BlurryCircle from "../components/blurry-circle";
import Button from "../components/button";
import Footer from "../components/footer";
import Header from "../components/header/header";
import Heading from "../components/heading";
import VectorsBG from "../components/vectors-bg";

const Contact = () => {
  return (
    <div className="bg-background min-h-screen">
      <main>
        <Header />
        <VectorsBG />
        <BlurryCircle />

        <section>
          <h1 className="text-2xl md:text-5xl font-azonix text-white mt-40 text-center">
            Contact
          </h1>
          <div className="font-ubuntu lg:text-2xl text-white w-2/3 mx-auto">
            <p className="my-10"></p>
            <Heading title="Hostel Accommodation (INVENTE'22)" />
            <ul>
              <li className="my-6">
                1. Participants are required to provide a *Bona-fide* given by
                their respective colleges for participating in Invente'22.
              </li>
              <li className="my-6">2. *College ID card* is mandatory.</li>
              <li className="my-6">
                3. The accommodation fee is Rs 250 per day
              </li>
              <li className="my-6">
                4. Payment for hostel must be done in the campus(on spot
                Payment).
              </li>
            </ul>
            <p className="mb-10">
              For more details contact,
              <br />
              Boys hostel head, SSN: HARIHARAN S V - 9600603513
              <br />
              Girls hostel head, SSN: SHALENI ELAMTHENDRAL- 9894607939
            </p>
            <div className="flex w-full justify-center mb-40">
              <Button
                action={() => {
                  window.location.href = "https://forms.gle/NjEPmmXx2GNwJt4w5";
                }}
              >
                Accomodation Link
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

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

            <Heading title="For Event Related Queries" />
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10">

              <div className="my-6">
                <p className="font-bold">IT</p>
                Meghanathan - 73585 56084 <br />
                Jaikishore - 98846 08974
              </div>

              <div className="my-6">
                <p className="font-bold">CIVIL</p>
                Deepack - 96770 92680
              </div>

              <div className="my-6">
                <p className="font-bold">CHEMICAL</p>
                Aishwarya - 9003279179 <br />
                Thirthaa -  73389 21132
              </div>

              <div className="my-6">
                <p className="font-bold">BME</p>
                Dharshan - 97890 15214<br />
                Vahini - 90257 56533
              </div>

              <div className="my-6">
                <p className="font-bold">ECE</p>
                Sandhya - 97909 56452<br />
                Sharmada - 77086 17246
              </div>

              <div className="my-6">
                <p className="font-bold">CSE</p>
                Samyuktha - 88844 06088
              </div>

              <div className="my-6">
                <p className="font-bold">EEE</p>
                Kedhar - 96001 54696<br />
                Harini - 91503 47424
              </div>
            
              <div className="my-6">
                <p className="font-bold">MECHANICAL</p>
                Dhinesh - 96775 63242
              </div>

              <div className="my-6">
                <p className="font-bold">SNUC COMMERCE</p>
                Arjun K Swamy - 99623 85392
              </div>

            </div>

            <br />
            <Heading title="For Payment Related Queries" />
            <ul>
              <li className="my-6">
                Sowmick Rakesh S - 95008 22248<br />
                Manish KS - 86101 00305
              </li>
            </ul>

            <br />

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

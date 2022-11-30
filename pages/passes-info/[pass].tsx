import { useRouter } from "next/router";
import React from "react";
import BlurryCircle from "../../components/blurry-circle";
import Button from "../../components/button";
import Footer from "../../components/footer";
import Header from "../../components/header/header";
import VectorsBG from "../../components/vectors-bg";

const getPassLink = (pass: string) => {
  switch (pass) {
    case "events":
      return "https://docs.google.com/forms/d/e/1FAIpQLScEFBMftan1tRArMFakh6WpD7ebf7FSOKJ14gKwiUxX1O_HKQ/viewform?usp=sf_link";
    case "workshop":
      return "https://docs.google.com/forms/d/e/1FAIpQLSc0QQYohqNQJU5Ld9VGWmXB9Qwbp61nRSHeCC5pAkSBnxWlrA/viewform?usp=sf_link";
    case "bulk":
      return "https://docs.google.com/forms/d/e/1FAIpQLScTlFEMi--UnT1xsbDI4hbm9SKEPzPjvE1ILPxAesw2h707Dw/viewform?usp=sf_link";
    case "hack":
      return "https://forms.gle/8xQE5ZrDk9GpGgkQ6";
  }
};

const getThirdPoint = (pass: string) => {
  switch (pass) {
    case "events":
      return `3. Under the given options, choose
            Registration (enter the number of passes required).`;
    case "workshop":
      return `3. Under the given options, choose Workshop.`;
    case "bulk":
      return `3. Under the given options, choose Bulk Registration (Bulk registration is open to groups of 20+ Members from the same college. The details of all members must be uploaded to the provided Google Form. Bulk registration includes only Event Passes, Workshop passes are separate.)`;
    case "hack":
      return `3. Under the given options, choose
            Registration (enter the number of passes required).`;
  }
};

const getDesc = (pass: string) => {
  switch (pass) {
    case "bulk":
      return `Bulk registration is open to groups of 20+ Members from the same college. The details of all members must be uploaded to the provided Google Form. Bulk registration includes only Event Passes, Workshop passes are separate.`;
    case "events":
      return `An Event Pass is applicable for single person and can apply for atmost 4 Techniacal Events.`;
    case "workshop":
      return `Workshop Pass is valid for single person and can only attend one workshop.`;
    case "hack":
      return `Hackathon Pass  only valid for single person. Each member of the team should buy pass separately.`;
  }
};
const PassesInfoPage = () => {
  const router = useRouter();
  const { pass } = router.query;

  return (
    <div className="bg-background min-h-screen">
      <main>
        <Header />
        <VectorsBG />
        <BlurryCircle />

        <section className="text-white">
          <p className="font-ubuntu lg:text-xl mt-40 lg:w-1/2 mx-auto text-center">
            {getDesc(pass as string)}
          </p>
          <h1 className="text-2xl md:text-5xl font-azonix text-white mt-10 text-center">
            Instructions for Registration
          </h1>
          <ul className="font-ubuntu lg:text-xl w-2/3 mx-auto my-10">
            <li className="my-10">1. Click the payment Button</li>
            <li className="my-10">
              2. Fill in the required details asked in the portal.{" "}
            </li>
            <li className="my-10">{getThirdPoint(pass as string)}</li>
            <li className="my-10">
              4. Pay the amount, download the e-receipt which you will be
              received.{" "}
            </li>
            <li className="my-10">
              5. After completing the registration, upload your receipt by
              clicking on the "Upload receipt" button.
            </li>
          </ul>
          <a
            href={getPassLink(pass as string)}
            className="flex w-full justify-center mb-20"
          >
            <Button>Upload Receipt</Button>
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PassesInfoPage;

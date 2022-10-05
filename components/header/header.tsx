import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Button from "../button";

const Header = () => {
  const nav = useRouter();
  return (
    <header className="flex fixed top-0 bg-black/30 backdrop-blur-lg z-10 text-white w-full justify-between py-4 px-4 xl:px-10 lg:py-6 items-center">
      <div className="w-full lg:w-1/4 flex justify-between lg:justify-start items-center">
        <ion-icon
          className="w-1/6 lg:hidden"
          size="large"
          name="menu"
        ></ion-icon>
        <div className="flex lg:w-full items-center w-1/2 md:w-2/5">
          <Link href="/" className="w-1/2 lg:w-1/3">
            <img src="/images/ssn.png" />
          </Link>
          <Link href="/" className="w-1/2 lg:w-1/3">
            <img src="/images/snu.png" />
          </Link>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-10 justify-center w-1/2 font-ubuntu ">
        <Link
          className="hover:tracking-wide-wide hover:font-bold transition-all duration-300 hover:text-2xl"
          href="/events"
        >
          Events
        </Link>
        <Link
          className="hover:tracking-wide-wide hover:font-bold transition-all duration-300 hover:text-2xl"
          href="/coming-soon"
        >
          Workshops
        </Link>
        <Link
          className="hover:tracking-wide-wide hover:font-bold transition-all duration-300 hover:text-2xl"
          href="/coming-soon"
        >
          Hackathon
        </Link>
        <Link
          className="hover:tracking-wide-wide hover:font-bold transition-all duration-300 hover:text-2xl"
          href="/coming-soon"
        >
          Schedule
        </Link>
        <Link
          className="hover:tracking-wide-wide hover:font-bold transition-all duration-300 hover:text-2xl"
          href="/coming-soon"
        >
          Sponsors
        </Link>
        <Link
          className="hover:tracking-wide-wide hover:font-bold transition-all duration-300 hover:text-2xl"
          href="/coming-soon"
        >
          Passes
        </Link>
      </div>
      <div className="hidden lg:flex gap-10 w-1/4 justify-end">
        <Button
          action={() => {
            nav.push("/signup");
          }}
        >
          Register
        </Button>
      </div>
    </header>
  );
};

export default Header;

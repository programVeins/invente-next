import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Button from "../button";
import { useAuth } from "../../lib/authContext";
import { toast } from "react-hot-toast";
import axios from "axios";

const Header = () => {
  const nav = useRouter();

  const { user, logout } = useAuth();
  const [secret, setSecret] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const async = async () => {
      try {
        const res = await axios.get("/api/eventDeets", {
          headers: {
            Authorization: `Bearer ${await user?.getIdToken()}`,
          },
        });
        setSecret(res.data.ok);
      } catch (err) {
        console.log(err);
      }
    };
    async().then(() => {});
  }, []);

  const [showingMenu, setShowingMenu] = useState(false);

  useEffect(() => {
    if (showingMenu) {
      document.body.classList.add("stop-scrolling");
    } else {
      document.body.classList.remove("stop-scrolling");
    }
  }, [showingMenu]);

  return (
    <header className="flex fixed top-0 bg-black/30 backdrop-blur-lg z-20 menu-nav text-white w-full justify-between py-4 px-4 xl:px-10 lg:py-6 items-center">
      <div className="w-full lg:hidden flex justify-between lg:justify-start items-center">
        {showingMenu && (
          <div className="absolute duration-300 transition-all flex flex-col z-30 w-full left-0 top-0 h-screen items-center justify-center shadow-xl border-[0.02rem] border-gray-400 border-opacity-20 bg-gray-900 rounded-md lg:rounded-xl">
            <div
              onClick={() => setShowingMenu(false)}
              className="font-ubuntu text-center my-6 text-xl"
            >
              <Link href="/">Home</Link>
            </div>
            <div
              onClick={() => setShowingMenu(false)}
              className="font-ubuntu text-center my-4 text-xl"
            >
              <Link href="/events">Events</Link>
            </div>
            <div
              onClick={() => setShowingMenu(false)}
              className="font-ubuntu text-center my-4 text-xl"
            >
              <Link href="/coming-soon">Workshops</Link>
            </div>
            <div
              onClick={() => setShowingMenu(false)}
              className="font-ubuntu text-center my-4 text-xl"
            >
              <Link href="/hackathon">Hackathon</Link>
            </div>
            <div
              onClick={() => setShowingMenu(false)}
              className="font-ubuntu text-center my-4 text-xl"
            >
              <Link href="/coming-soon">Schedule</Link>
            </div>
            <div
              onClick={() => setShowingMenu(false)}
              className="font-ubuntu text-center my-4 text-xl"
            >
              <Link href="/coming-soon">Sponsors</Link>
            </div>
            <div
              onClick={() => setShowingMenu(false)}
              className="font-ubuntu text-center my-4 text-xl"
            >
              <Link href="/passes">Passes</Link>
            </div>
            <div
              onClick={() => setShowingMenu(false)}
              className="font-ubuntu text-center my-4 text-xl"
            >
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        )}
        <i
          className="w-1/6 z-50 lg:hidden cursor-pointer"
          onClick={() => setShowingMenu(!showingMenu)}
          dangerouslySetInnerHTML={{
            __html: `<ion-icon
            size="large"
            name="menu"
          ></ion-icon>`,
          }}
        ></i>
        <Button action={() => router.push("/passes")}>Get Passes</Button>
      </div>
      <div className="hidden w-full lg:flex items-center gap-10 justify-start font-ubuntu ">
        <div className="hover:tracking-wide-wide hover:font-bold transition-all duration-300">
          <Link className="" href="/">
            Home
          </Link>
        </div>
        <div className="hover:tracking-wide-wide hover:font-bold transition-all duration-300">
          <Link className="" href="/events">
            Events
          </Link>
        </div>
        <div className="hover:tracking-wide-wide hover:font-bold transition-all duration-300">
          <Link href="/coming-soon">Workshops</Link>
        </div>
        <div className="hover:tracking-wide-wide hover:font-bold transition-all duration-300">
          <Link href="/hackathon">Hackathon</Link>
        </div>
        <div className="hover:tracking-wide-wide hover:font-bold transition-all duration-300">
          <Link href="/coming-soon">Schedule</Link>
        </div>
        <div className="hover:tracking-wide-wide hover:font-bold transition-all duration-300">
          <Link href="/coming-soon">Sponsors</Link>
        </div>
        <div className="hover:tracking-wide-wide hover:font-bold transition-all duration-300">
          <Link href="/passes">Passes</Link>
        </div>
        <div className="hover:tracking-wide-wide hover:font-bold transition-all duration-300">
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      <div className="hidden lg:flex gap-10 w-2/3 justify-end">
        {secret && (
          <Button
            action={async () => {
              nav.push("/events-data");
            }}
          >
            Events Form
          </Button>
        )}
        <Button action={() => router.push("/passes")}>Get Passes</Button>
      </div>
    </header>
  );
};

export default Header;

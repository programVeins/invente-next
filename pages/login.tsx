import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Button from "../components/button";
import Header from "../components/header/header";
import { useAuth } from "../lib/authContext";

function LoginPage() {
  const [store, setStore] = useState({
    email: "",
    password: "",
  });

  const { login, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) router.push("/");
  }, [user, router]);

  return (
    <div>
      <Header />
      <h1 className="text-2xl md:text-5xl font-azonix text-white mt-40 text-center">
        Login
      </h1>
      <div className="bg-white/10 my-20 flex md:flex-row flex-col mx-auto backdrop-blur-md md:h-96 shadow-2xl shadow-black/40 rounded-lg w-5/6 md:w-1/2 border-white">
        <img
          src="/images/vr.png"
          className="md:h-96 m-0 p-0 rounded-t-lg md:rounded-l-lg"
        />
        <form className="flex flex-col mt-6 md:mt-0 md:w-1/2 mx-auto items-center justify-center">
          <label className="text-white text-left md:w-3/4 font-ubuntu">
            Email
          </label>
          <input
            name="email"
            type="text"
            className="bg-white/10 md:w-3/4 shadow-inner shadow-black/50 backdrop-blur-md rounded-md text-white px-4 py-2 my-2"
            value={store.email}
            onChange={(e) => setStore({ ...store, email: e.target.value })}
          />
          <label className="text-white text-left md:w-3/4 font-ubuntu">
            Password
          </label>
          <input
            name="password"
            type="password"
            className="bg-white/10 md:w-3/4 shadow-inner shadow-black/50 backdrop-blur-md rounded-md text-white px-4 py-2 my-2"
            value={store.password}
            onChange={(e) => setStore({ ...store, password: e.target.value })}
          />
          <Button
            sub
            classes="mt-10 md:w-3/4"
            action={async () => {
              console.log(store.email, store.password);
              const res = await login(store.email, store.password);
              console.log(await res.user.getIdToken());
              toast.success("Logged in successfully");
              router.push("/");
            }}
          >
            Login
          </Button>
          <p className="my-4 text-white font-ubuntu">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className=" decoration-teal-400 underline font-bold cursor-pointer"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;

import { FirebaseError } from "firebase/app";
import React, { useEffect, useState } from "react";
import Button from "../components/button";
import { useAuth } from "../lib/authContext";
import Link from "next/link";
import { useRouter } from "next/router";
import Header from "../components/header/header";
import { toast } from "react-hot-toast";
import axios from "axios";

type Props = {};

function SignUp({}: Props) {
  const [store, setStore] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    college_name: "",
    department: "",
    password: "",
    isSuccess: false,
    loading: true,
    errorMessage: "",
    year: 0,
  });

  const { signup, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) router.push("/");
  }, [user, router]);

  return (
    <div>
      <Header />
      <h1 className="text-3xl md:text-5xl font-azonix text-white mt-40 text-center">
        Sign Up
      </h1>
      <div className="bg-white/10 my-20 flex md:flex-row flex-col mx-auto backdrop-blur-md shadow-2xl shadow-black/40 rounded-lg w-3/4 border-white">
        <img
          src="/images/pc.png"
          className="md:w-1/2 w-full m-0 p-0 rounded-l-t  md:rounded-l-lg"
        />
        <form className="flex flex-col md:w-1/2 py-10 px-2 md:p-10 mx-auto items-center justify-center">
          <label className="text-white text-left md:w-3/4 font-ubuntu">
            Full Name
          </label>
          <input
            required
            name="full_name"
            type="text"
            className="bg-white/10 md:w-3/4 shadow-inner shadow-black/50 backdrop-blur-md rounded-md text-white px-4 py-2 mt-2 mb-4"
            value={store.full_name}
            onChange={(e) => setStore({ ...store, full_name: e.target.value })}
          />

          <label className="text-white text-left md:w-3/4 font-ubuntu">
            Email
          </label>
          <input
            required
            name="email"
            type="text"
            className="bg-white/10 md:w-3/4 shadow-inner shadow-black/50 backdrop-blur-md rounded-md text-white px-4 py-2 mt-2 mb-4"
            value={store.email}
            onChange={(e) => setStore({ ...store, email: e.target.value })}
          />
          <label className="text-white text-left md:w-3/4 font-ubuntu">
            Phone Number
          </label>
          <input
            required
            name="phone_number"
            type="text"
            className="bg-white/10 md:w-3/4 shadow-inner shadow-black/50 backdrop-blur-md rounded-md text-white px-4 py-2 mt-2 mb-4"
            value={store.phone_number}
            onChange={(e) =>
              setStore({ ...store, phone_number: e.target.value })
            }
          />
          <label className="text-white text-left md:w-3/4 font-ubuntu">
            College Name
          </label>
          <input
            required
            name="college"
            type="text"
            className="bg-white/10 md:w-3/4 shadow-inner shadow-black/50 backdrop-blur-md rounded-md text-white px-4 py-2 mt-2 mb-4"
            value={store.college_name}
            onChange={(e) =>
              setStore({ ...store, college_name: e.target.value })
            }
          />
          <label className="text-white text-left w-3/4 font-ubuntu">Year</label>
          <input
            required
            name="year"
            type="number"
            className="bg-white/10 md:w-3/4 shadow-inner shadow-black/50 backdrop-blur-md rounded-md text-white px-4 py-2 mt-2 mb-4"
            value={store.year}
            onChange={(e) =>
              setStore({
                ...store,
                year: parseInt(e.target.value),
              })
            }
          />
          <label className="text-white text-left md:w-3/4 font-ubuntu">
            Department
          </label>
          <input
            required
            name="department"
            type="text"
            className="bg-white/10 md:w-3/4 shadow-inner shadow-black/50 backdrop-blur-md rounded-md text-white px-4 py-2 mt-2 mb-4"
            value={store.department}
            onChange={(e) => setStore({ ...store, department: e.target.value })}
          />
          <label className="text-white text-left md:w-3/4 font-ubuntu">
            Password
          </label>
          <input
            required
            name="password"
            type="password"
            className="bg-white/10 md:w-3/4 shadow-inner shadow-black/50 backdrop-blur-md rounded-md text-white px-4 py-2 mt-2 mb-4"
            value={store.password}
            onChange={(e) => setStore({ ...store, password: e.target.value })}
          />
          <Button
            sub
            classes="mt-10 md:w-3/4"
            action={async () => {
              console.log(store.email, store.password);
              try {
                const creds = await signup(store.email, store.password);
                store.isSuccess = true;
                try {
                  await axios.post(
                    window.location.origin + "/api/user/signup",
                    {
                      ...store,
                      password: undefined,
                    },
                    {
                      headers: {
                        Authorization: `Bearer ${await creds.user?.getIdToken()}`,
                      },
                    }
                  );
                  toast.success("Signed Up Successfully");
                } catch (error) {
                  console.log(error);
                  toast.error("Unknown Error Occured. Reach out to Support");
                }
              } catch (error) {
                console.log(
                  (error as FirebaseError).message.split(":")[1].split("(")[0]
                );
                store.errorMessage = (error as FirebaseError).message
                  .split(":")[1]
                  .split("(")[0];
                store.isSuccess = false;
                toast.error(store.errorMessage);
              }
            }}
          >
            Sign Up
          </Button>
          <p className="mt-4 text-white font-ubuntu">
            Already signed up?{" "}
            <Link
              href="/login"
              className=" decoration-teal-400 underline font-bold cursor-pointer"
            >
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

import { FirebaseError } from "firebase/app";
import React, { useEffect, useState } from "react";
import Button from "../components/button";
import { useAuth } from "../lib/authContext";
import Link from "next/link";
import { useRouter } from "next/router";
import Header from "../components/header/header";
import { toast } from "react-hot-toast";

type Props = {};

function SignUp({}: Props) {
    const [store, setStore] = useState({
        name: "",
        email: "",
        phone: "",
        college: "",
        department: "",
        password: "",
        isSuccess: false,
        loading: true,
        errorMessage: "",
    });

    const { signup, user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (user) router.push("/");
    }, [user, router]);

    return (
        <div>
            <Header />
            <h1 className="text-5xl font-azonix text-white mt-40 text-center">
                Sign Up
            </h1>
            <div className="bg-white/10 my-20 flex mx-auto backdrop-blur-md shadow-2xl shadow-black/40 rounded-lg w-3/4 border-white">
                <img
                    src="/images/pc.png"
                    className="w-1/2 m-0 p-0 rounded-l-lg"
                />
                <form className="flex flex-col w-1/2 p-10 mx-auto items-center justify-center">
                    <label className="text-white text-left w-3/4 font-ubuntu">
                        Full Name
                    </label>
                    <input
                        required
                        name="name"
                        type="text"
                        className="bg-white/10 w-3/4 shadow-inner shadow-black/50 backdrop-blur-md rounded-md text-white px-4 py-2 mt-2 mb-4"
                        value={store.name}
                        onChange={(e) =>
                            setStore({ ...store, name: e.target.value })
                        }
                    />

                    <label className="text-white text-left w-3/4 font-ubuntu">
                        Email
                    </label>
                    <input
                        required
                        name="email"
                        type="text"
                        className="bg-white/10 w-3/4 shadow-inner shadow-black/50 backdrop-blur-md rounded-md text-white px-4 py-2 mt-2 mb-4"
                        value={store.email}
                        onChange={(e) =>
                            setStore({ ...store, email: e.target.value })
                        }
                    />
                    <label className="text-white text-left w-3/4 font-ubuntu">
                        Phone Number
                    </label>
                    <input
                        required
                        name="phone"
                        type="text"
                        className="bg-white/10 w-3/4 shadow-inner shadow-black/50 backdrop-blur-md rounded-md text-white px-4 py-2 mt-2 mb-4"
                        value={store.phone}
                        onChange={(e) =>
                            setStore({ ...store, phone: e.target.value })
                        }
                    />
                    <label className="text-white text-left w-3/4 font-ubuntu">
                        College Name
                    </label>
                    <input
                        required
                        name="college"
                        type="text"
                        className="bg-white/10 w-3/4 shadow-inner shadow-black/50 backdrop-blur-md rounded-md text-white px-4 py-2 mt-2 mb-4"
                        value={store.college}
                        onChange={(e) =>
                            setStore({ ...store, college: e.target.value })
                        }
                    />
                    <label className="text-white text-left w-3/4 font-ubuntu">
                        Department
                    </label>
                    <input
                        required
                        name="department"
                        type="text"
                        className="bg-white/10 w-3/4 shadow-inner shadow-black/50 backdrop-blur-md rounded-md text-white px-4 py-2 mt-2 mb-4"
                        value={store.department}
                        onChange={(e) =>
                            setStore({ ...store, department: e.target.value })
                        }
                    />
                    <label className="text-white text-left w-3/4 font-ubuntu">
                        Password
                    </label>
                    <input
                        required
                        name="password"
                        type="password"
                        className="bg-white/10 w-3/4 shadow-inner shadow-black/50 backdrop-blur-md rounded-md text-white px-4 py-2 mt-2 mb-4"
                        value={store.password}
                        onChange={(e) =>
                            setStore({ ...store, password: e.target.value })
                        }
                    />
                    <Button
                        sub
                        classes="mt-10 w-3/4"
                        action={async () => {
                            console.log(store.email, store.password);
                            try {
                                await signup(store.email, store.password);
                                store.isSuccess = true;
                                toast.success("Signed Up Successfully");
                            } catch (error) {
                                console.log(
                                    (error as FirebaseError).message
                                        .split(":")[1]
                                        .split("(")[0]
                                );
                                store.errorMessage = (
                                    error as FirebaseError
                                ).message
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

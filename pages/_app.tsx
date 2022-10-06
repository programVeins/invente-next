import "../styles/globals.css";
import type { AppProps } from "next/app";
import AuthProvider from "../lib/authContext";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <AuthProvider>
            <div>
                <Component {...pageProps} />
                <Toaster />
            </div>
        </AuthProvider>
    );
}

export default MyApp;

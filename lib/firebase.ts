import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBB4hrJY5BOlNvog0zCfqXGwq9j3m7h0_g",
    authDomain: "invente-dev.firebaseapp.com",
    projectId: "invente-dev",
    storageBucket: "invente-dev.appspot.com",
    messagingSenderId: "240214928328",
    appId: "1:240214928328:web:99539f0a15f465c4cfaefd",
    measurementId: "G-HT4RXJHTRZ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

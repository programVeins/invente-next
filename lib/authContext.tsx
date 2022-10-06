import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "./firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    User,
    UserCredential,
} from "firebase/auth";

const AuthContext = createContext<AuthValues>({
    user: null,
    login,
    signup,
    logout,
    resetPassword,
});

interface AuthValues {
    user: User | null;
    login: (email: string, password: string) => Promise<UserCredential>;
    signup: (email: string, password: string) => Promise<UserCredential>;
    logout: () => Promise<void>;
    resetPassword: (email: string) => Promise<void>;
}

export function useAuth() {
    return useContext(AuthContext);
}

function signup(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
}

function login(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
}

function logout() {
    return signOut(auth);
}

function resetPassword(email: string) {
    return sendPasswordResetEmail(auth, email);
}

const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setCurrentUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const value = {
        user,
        login,
        signup,
        logout,
        resetPassword,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

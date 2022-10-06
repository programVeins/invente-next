import * as firebaseConfig from "./firebase.json";
import * as firebase from "firebase-admin";
import { NextApiRequest, NextApiResponse } from "next";
import { DecodedIdToken } from "firebase-admin/lib/auth/token-verifier";
import { Auth } from "firebase-admin/lib/auth/auth";

const firebase_params = {
    type: firebaseConfig.type,
    projectId: firebaseConfig.project_id,
    privateKeyId: firebaseConfig.private_key_id,
    privateKey: firebaseConfig.private_key,
    clientEmail: firebaseConfig.client_email,
    clientId: firebaseConfig.client_id,
    authUri: firebaseConfig.auth_uri,
    tokenUri: firebaseConfig.token_uri,
    authProviderX509CertUrl: firebaseConfig.auth_provider_x509_cert_url,
    clientC509CertUrl: firebaseConfig.client_x509_cert_url,
};

export type ExtendedNextApiRequest = {
    req: NextApiRequest;
    user: DecodedIdToken;
};

if (!firebase.apps.length) {
    firebase.initializeApp({
        credential: firebase.credential.cert(firebase_params),
    });
}
const auth: Auth = firebase.auth();

export function withAuth(handler: any) {
    return async (req: NextApiRequest, res: NextApiResponse) => {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).end("Not authenticated. No Auth header");
        }

        const token = authHeader.split(" ")[1];
        let decodedToken: DecodedIdToken;
        let extendedReq: ExtendedNextApiRequest;
        try {
            decodedToken = await auth.verifyIdToken(token);
            if (!decodedToken || !decodedToken.uid)
                return res.status(401).end("Not authenticated");
            extendedReq = {
                req,
                user: decodedToken,
            };
        } catch (error: any) {
            console.log(error);
            const errorCode = error.errorInfo.code;
            error.status = 401;
            if (errorCode === "auth/internal-error") {
                error.status = 500;
            }
            return res.status(error.status).json({ error: errorCode });
        }

        return handler(extendedReq, res);
    };
}

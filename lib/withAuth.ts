import { NextApiRequest, NextApiResponse } from "next";
import { DecodedIdToken } from "firebase-admin/lib/auth/token-verifier";
import { auth } from "./admin";

export type ExtendedNextApiRequest = {
    req: NextApiRequest;
    user: DecodedIdToken;
};

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

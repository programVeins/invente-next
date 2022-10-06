import { DecodedIdToken } from "firebase-admin/lib/auth/token-verifier";
import type { NextApiResponse } from "next";
import { ExtendedNextApiRequest, withAuth } from "../../../lib/withAuth";

const handler = (
    extReq: ExtendedNextApiRequest,
    res: NextApiResponse<DecodedIdToken>
) => {
    const user = extReq.user;
    res.send(user);
};

export default withAuth(handler);

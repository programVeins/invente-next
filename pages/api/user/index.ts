import type { NextApiResponse } from "next";
import { ExtendedNextApiRequest, withAuth } from "../../../lib/withAuth";

const handler = (extReq: ExtendedNextApiRequest, res: NextApiResponse) => {
    if (extReq.req.method === "GET") {
        res.send(extReq.user);
    } else {
        res.status(405).json({ error: "Method not allowed" });
    }
};

export default withAuth(handler);

import type { NextApiResponse } from "next";
import { ExtendedNextApiRequest, withAuth } from "../../../lib/withAuth";
import { prisma } from "../../../lib/prisma";

const handler = async (
    extReq: ExtendedNextApiRequest,
    res: NextApiResponse<any>
) => {
    if (extReq.req.method === "POST") {
        const user = extReq.user;
        const req = extReq.req;
        const data = {
            email: user.email as string,
            phone_number: req.body.phone_number,
            full_name: req.body.full_name,
            college_name: req.body.college_name,
            department: req.body.department,
            verified: false,
            firebase_id: user.uid,
            year: req.body.year,
        };
        try {
            await prisma.user.create({
                data,
            });
            res.send(data);
        } catch (e) {
            console.log(e);
            return res.status(400).json({ error: e });
        }
    } else {
        res.status(405).json({ error: "Method not allowed" });
    }
};

export default withAuth(handler);

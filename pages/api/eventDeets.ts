import type { NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";
import { ExtendedNextApiRequest, withAuth } from "../../lib/withAuth";

const handler = async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
    if (req.req.method === "GET") {
        const user = req.user;
        const findEvent = await prisma.event.findFirst({
            where: {
                EventHead: {
                    userEmail: user.email,
                },
            },
        });
        if (findEvent) {
            res.send({
                ok: true,
                event: findEvent,
            });
        } else {
            res.send({
                message: "You are not an event head",
                ok: false,
            });
        }
    } else if (req.req.method === "POST") {
        res.status(405).json({ error: "Method not allowed" });
    }
};

export default withAuth(handler);

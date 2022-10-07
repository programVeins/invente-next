import { pass } from "@prisma/client";
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
        const user = req.user;
        const reqBody = req.req.body;
        console.log(user);
        const findEvent = await prisma.event.findFirst({
            where: {
                EventHead: {
                    userEmail: user.email,
                },
            },
        });
        if (findEvent) {
            const data = await prisma.event.update({
                where: {
                    id: findEvent.id,
                },
                data: {
                    event_name: reqBody.event_name,
                    pass: reqBody.pass,
                    sections: reqBody.sections,
                    venue: reqBody.venue,
                    time: reqBody.time,
                    size: reqBody.size,
                    description: reqBody.description,
                    department: reqBody.department,
                },
            });
            res.send({
                ok: true,
                message: "Event details updated",
                data: data,
            });
        } else {
            res.send({
                message: "You are not an event head",
                ok: false,
            });
        }
    }
};

export default withAuth(handler);

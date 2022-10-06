import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";
import { pass } from "@prisma/client";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const data = await axios.get(
        "https://api.sheety.co/17b705cfadfc1b02dbe639fe4710bafa/eventHeadsInventeWebsite/sheet1"
    );

    await prisma.eventHead.deleteMany();
    for (const row of data.data.sheet1) {
        const findEvent = await prisma.event.findFirst({
            where: {
                id: row.id,
            },
        });
        if (!findEvent) {
            await prisma.event.create({
                data: {
                    id: row.id,
                    event_name: row.eventName,
                    department: row.department,
                    pass: pass.tech,
                },
            });
        } else {
            await prisma.event.update({
                where: {
                    id: row.id,
                },
                data: {
                    event_name: row.eventName,
                    department: row.department,
                    pass: pass.tech,
                },
            });
        }
        const findEventHead = await prisma.eventHead.findFirst({
            where: {
                eventId: row.id,
            },
        });
        if (!findEventHead) {
            await prisma.eventHead.create({
                data: {
                    eventId: row.id,
                    userEmail: row.ssnEmailId,
                },
            });
        } else {
            await prisma.eventHead.update({
                where: {
                    eventId: row.id,
                },
                data: {
                    userEmail: row.ssnEmailId,
                },
            });
        }
    }
    res.status(200).json(data.data);
}

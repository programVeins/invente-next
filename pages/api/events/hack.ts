import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    //const user = req.user;
    const dept = req.query.dept as string;
    const findEvents = await prisma.event.findFirst({
      where: {
        event_name: "Hackinfinity",
      },
    });
    if (findEvents) {
      res.send({
        ok: true,
        events: findEvents,
      });
    } else {
      res.send({
        message: "Hack not found",
        ok: false,
      });
    }
  }
};

export default handler;

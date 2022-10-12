import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    //const user = req.user;
    const dept = req.query.dept as string;
    const findEvents = await prisma.event.findMany({
      where: {
        department: dept
          .split("-")
          .map((word) => {
            if (word == "snu") {
              return word.toUpperCase();
            } else if (word != "and") {
              return word[0].toUpperCase() + word.substring(1);
            } else {
              return word;
            }
          })
          .join(" "),
      },
    });
    if (findEvents) {
      res.send({
        ok: true,
        events: findEvents,
      });
    } else {
      res.send({
        message: "Dept not found",
        ok: false,
      });
    }
  }
};

export default handler;

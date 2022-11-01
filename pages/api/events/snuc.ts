import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const findBCOM = await prisma.event.findMany({
      where: {
        department: "BCOM",
      },
    });

    const findSNUC = await prisma.event.findMany({
      where: {
        department: "SNU Commerce",
      },
    });

    if (findBCOM && findSNUC) {
      res.send({
        ok: true,
        events: [...findBCOM, ...findSNUC],
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

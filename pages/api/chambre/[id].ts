import prisma from "../../../utils/prisma";

export default async function handler(req, res) {
  if (req.method == "GET") {
    const room = await prisma.room.findFirst({ where: { id: req.query.id } });

    return res.status(200).json(room);
  }
}

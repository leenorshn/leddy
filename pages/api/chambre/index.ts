import prisma from "../../../utils/prisma";

export default async function handler(req, res) {
  if (req.method == "POST") {
    const { numero, features, price, url } = req.body;
    const room = await prisma.room.create({
      data: { numero, features, price, url },
    });

    return res.status(201).json(room);
  } else {
    const rooms = await prisma.room.findMany({});

    return res.status(200).json(rooms);
  }
}

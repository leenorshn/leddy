import prisma from "../../../utils/prisma";

export default async function handler(req, res) {
  console.log(req.body);

  if (req.method == "POST") {
    const { numero, price, url, category } = req.body;
    console.log(req.body);

    const room = await prisma.room.create({
      data: { numero, price, url, category },
    });

    return res.status(201).json(room);
  } else {
    const rooms = await prisma.room.findMany({});

    return res.status(200).json(rooms);
  }
}

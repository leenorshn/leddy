import prisma from "../../../utils/prisma";

export default async function handler(req, res) {
  if (req.method == "POST") {
    const { email, phone, roomId, name, dateStart, dateEnd } = req.body;

    var diff = new Date(dateEnd).getDate() - new Date(dateStart).getDate();
    console.log(diff);

    const customer = await prisma.customer.create({
      data: { email, phone, name },
    });
    const room = await prisma.room.findFirst({ where: { id: roomId } });
    const reservation = await prisma.reservation.create({
      data: {
        dateStart: new Date(dateStart),
        dateEnd: new Date(dateEnd),
        room: {
          connect: {
            id: room.id,
          },
        },
        dure: diff,
        totalPayment: room.price * diff,
        customer: {
          connect: {
            id: customer.id,
          },
        },
      },
    });

    return res.status(201).json(reservation);
  } else {
    const reservations = await prisma.reservation.findMany({
      include: { customer: true, room: true },
    });

    return res.status(200).json(reservations);
  }
}

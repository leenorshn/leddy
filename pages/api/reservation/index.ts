import prisma from "../../../utils/prisma";

export default async function handler(req, res) {
  if (req.method == "POST") {
    const { customerId, roomId, montant, dure } = req.body;
    const reservation = await prisma.reservation.create({
      data: { dure, customerId, roomId },
    });

    return res.status(201).json(reservation);
  } else {
    const reservations = await prisma.reservation.findMany({});

    return res.status(200).json(reservations);
  }
}

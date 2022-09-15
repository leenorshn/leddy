import prisma from "../../../utils/prisma";

export default async function handler(req, res) {
  const { payed } = req.body;
  const reservation = await prisma.reservation.update({
    where: { id: req.query.id },
    data: { payed },
  });
  return res.status(200).json(reservation);
}

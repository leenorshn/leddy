import prisma from "../../utils/prisma";

export default async function handler(req, res) {
  const customers = await prisma.customer.findMany({});
  return res.status(200).json(customers);
}
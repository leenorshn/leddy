import prisma from "../../utils/prisma";

export default async function handler(req, res) {
  if (req.method == "POST") {
    const customer = await prisma.customer.create(req.body);
    return res.status(201).json(customer);
  } else {
    const customers = await prisma.customer.findMany({});
    return res.status(200).json(customers);
  }
}

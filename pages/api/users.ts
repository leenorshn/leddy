import prisma from "../../utils/prisma";

export default async function handler(req, res) {
  const users = await prisma.user.findMany({});
  if (!users) {
    return res.status(404).json("user not found");
  }
  return res.status(200).json(users);
}

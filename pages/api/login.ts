// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import prisma from "../../utils/prisma";

export default async function handler(req, res) {
  const { phone, password } = req.body;
  const user = await prisma.user.findFirst({ where: { phone, password } });
  if (!user) {
    return res.status(404).json("user not found");
  }
  return res.status(200).json(user);
}

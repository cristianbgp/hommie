import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function (req, res) {
  switch (req.method) {
    case "GET":
      const tasks = await prisma.task.findMany();
      res.json(tasks.sort((a, b) => a.orderInt - b.orderInt));
      break;
    case "POST":
      const task = await prisma.task.create({ data: req.body });
      res.json(task);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

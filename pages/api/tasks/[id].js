import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handle(req, res) {
  const taskId = req.query.id;

  switch (req.method) {
    case "GET":
      const task = await prisma.task.findOne({
        where: { id: parseInt(taskId) },
      });
      res.json(task);
      break;
    case "PATCH":
      const updatedTask = await prisma.task.update({
        where: { id: parseInt(taskId) },
        data: JSON.parse(req.body),
      });
      res.json(updatedTask);
      break;
    case "DELETE":
      const deletedTask = await prisma.task.delete({
        where: { id: parseInt(taskId) },
      });
      res.json(deletedTask);
      break;
    default:
      res.setHeader("Allow", ["GET", "PATCH"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

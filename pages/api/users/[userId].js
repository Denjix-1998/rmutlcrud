import connectMongo from "@/database/conn";
import { getUser, postUser, putUser, deleteUser } from "@/database/controller";

export default async function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "GET":
      getUser(req, res);
      break;
    case "POST":
      postUser(req, res);
      break;
    case "PUT":
      putUser(req, res);
      break;
    case "DELETE":
      deleteUser(req, res);
      break;

    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowd`);
      break;
  }
}

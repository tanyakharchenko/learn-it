import { Router } from "express";
import client from "../service/getDataBaseClient";

const router = Router();

router.get("/all", async (req, res) => {
  const courses = await client
    .db("courses")
    .collection("all-courses")
    .find()
    .toArray();
  res.send(courses);
});

export default router;

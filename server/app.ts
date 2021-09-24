import express from "express";
require("dotenv").config();
import client from "./service/getDataBaseClient";
import router from './routes';

const app = express();

app.use('/api', router);

app.get("/", (req, res) => {
  res.send("Well done!");
});


app.listen(5000, () => {
  console.log("The application is listening on port 3000!");
  client.connect();
});

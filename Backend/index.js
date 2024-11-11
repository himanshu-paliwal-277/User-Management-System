import express from "express";
import connectDB from "./src/config/dbConfig.js";
import apiRouter from "./src/routers/apiRouter.js";

const port = 3000;

const app = express();

app.use(express.json());

app.use("/api", apiRouter);

app.get("/", (req, res) => {
  return res.status(200).send("User Management System API");
});

app.listen(port, () => {
  console.log("server is running on port", port);
  connectDB();
});

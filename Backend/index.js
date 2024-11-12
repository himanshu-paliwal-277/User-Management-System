import express from "express";
import connectDB from "./src/config/dbConfig.js";
import apiRouter from "./src/routers/apiRouter.js";
import cors from "cors";

const port = 3000;

const app = express();

// CORS (Cross-Origin Resource Sharing) configuration
const corsOptions = {
  origin: [
    "http://localhost:5173", // Local development URL on port 5173
    "https://user-management-system-frontend.netlify.app", // Production URL
  ],
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
  credentials: true, // Allow credentials (if needed)
};

// Use CORS middleware with options
app.use(cors(corsOptions));

app.use(express.json());

app.use("/api", apiRouter);

app.get("/", (req, res) => {
  return res.status(200).send("User Management System API");
});

app.listen(port, () => {
  console.log("server is running on port", port);
  connectDB();
});

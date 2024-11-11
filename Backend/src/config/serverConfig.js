import dotenv from "dotenv";

dotenv.config();
console.log("MONGO_URL", process.env.MONGO_URL);

export const MONGO_URL = process.env.MONGO_URL;

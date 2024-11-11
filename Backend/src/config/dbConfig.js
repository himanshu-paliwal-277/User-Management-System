import mongoose from "mongoose";
import { MONGO_URL } from "./serverConfig.js";

console.log("MONGO_URL", MONGO_URL);

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Successfully connected to mongodb`);
  } catch (error) {
    console.error(`Error connecting to mongodb: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;

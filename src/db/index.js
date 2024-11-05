import mongoose from "mongoose";
import { DB_name } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_name}`
    );
    console.log(
      `DB connected successfully. DB Host : ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("DB connection error", error);
    process.exit(1);
  }
};

export default connectDB;

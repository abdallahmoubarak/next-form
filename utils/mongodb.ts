"use server";
import mongoose from "mongoose";

const { MONGO_URI } = process.env;

export const connectDB = async () => {
  if (!MONGO_URI) {
    throw new Error("Please add your Mongo URI to the environment variables");
  }

  try {
    const { connection } = await mongoose.connect(MONGO_URI);
    if (connection.readyState === 1) {
      console.log("MongoDB connected");
      return true;
    }
  } catch (error) {
    console.error("MongoDB connection error:", error);
    return false;
  }
};

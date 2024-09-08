import mongoose from "mongoose";
const { MONGO_URI } = process.env;
export const connectDB = async () => {
  try {
    if (typeof window === "undefined") {
      // Only run this code in the browser
      const { connection } = await mongoose.connect(MONGO_URI as string);
      if (connection.readyState === 1) {
        return Promise.resolve(true);
      }
    }
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};

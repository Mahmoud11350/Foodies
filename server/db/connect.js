import mongoose from "mongoose";
const connectDB = () => mongoose.connect(process.env.MONGOURL);

export const start = async () => {
  await connectDB();
};
start();

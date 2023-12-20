import mongoose from "mongoose";
const connectDB = () => mongoose.connect("mongodb://127.0.0.1:27017/foodies");

export const start = async () => {
  await connectDB();
  console.log("data base runing");
};
start();

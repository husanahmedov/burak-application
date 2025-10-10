import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("connection is succedd")
    const PORT = process.env.PORT ?? 3003
  })
  .catch((error) => {
    console.log("ERROR on connection to MongoDB", error);
  });

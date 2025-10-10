import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

import app from './app';

mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("connection to database is succedd")
    const PORT = process.env.PORT ?? 3003
    app.listen(PORT, function() {
      console.log("DONE", PORT);
    })
  })
  .catch((error) => {
    console.log("ERROR on connection to MongoDB", error);
  });

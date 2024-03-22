import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

function mongoDB() {
  const mongoURL = `mongodb+srv://aniketmukherjee5_practice:${process.env.MONGO_KEY}@cluster0.gdrzkes.mongodb.net/`;

  mongoose
    .connect(mongoURL)
    .then(() => {
      console.log("Connected to the DB");
    })
    .catch((err) => {
      console.log(err);
    });
}

export default mongoDB;
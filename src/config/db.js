import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config();
const MONGO_HOST = process.env.MONGO_HOST;

// Establish Connection
mongoose.connect(MONGO_HOST);

// Events for when connection opens/disconnects/errors
mongoose.connection
    .on("open", () => console.log("Connected to Mongoose"))
    .on("close", () => console.log("Disconnected from Mongoose"))
    .on("error", (error) => console.log(error));

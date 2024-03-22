import dotenv from "dotenv";
dotenv.config();
import "./config/db.js";
import { app } from "./config/express.js";
const SERVER_PORT = process.env.SERVER_PORT;
app.listen(SERVER_PORT, () => console.log(`Now Listening on port ${SERVER_PORT}`))
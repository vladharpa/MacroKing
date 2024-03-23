import dotenv from "dotenv";
dotenv.config();
import "./config/db.js";
import { app } from "./config/express.js";
import "./controllers/register.controller.js";
import "./controllers/seed.controller.js";
import "./controllers/aliment.controller.js";


const SERVER_PORT = process.env.SERVER_PORT;
app.listen(SERVER_PORT, () => console.log(`Now Listening on port ${SERVER_PORT}`))

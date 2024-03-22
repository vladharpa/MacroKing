import express, { urlencoded } from "express" // import express
import morgan from "morgan";
import methodOverride from "method-override";
export const app = express()

/////////////////////////////////////////////////////
// Middleware
/////////////////////////////////////////////////////
app.use(morgan("tiny")) //logging
app.use(methodOverride("_method")) // override for put and delete requests from forms
app.use(urlencoded({extended: true})) // parse urlencoded request bodies
// View engine setup
app.set('view engine', 'ejs');
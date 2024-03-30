import { app } from "../config/express.js";
import  path  from "path";

app.get('/',async (req,res,next)=>{
    res.render('index');
})
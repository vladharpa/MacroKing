import { app } from "../config/express.js";
import  path  from "path";

app.get('/index',(req,res)=>{
    res.render('index');
})
import { app } from "../config/express.js";
import  path  from "path";

app.get('/login',async (req,res)=>{
    res.sendFile('login.html')
})
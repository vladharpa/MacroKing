import { app } from "../config/express.js";
import  path  from "path";
app.get('/login',(req,res)=>{

    res.render('mainpage.ejs');
})

app.post('/login',async (req,res)=>{
    res.sendFile()
})
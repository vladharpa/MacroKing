import { Aliment } from "../models/aliment.model.js";
import { app } from "../config/express.js";
import  path  from "path";

const fileDirectory = path.resolve('src','views');

app.get('/mainpage',(req,res)=>{

    res.render('mainpage',{aliment:undefined});

});

app.post('/mainpage',async (req,res)=>{
    
    let alimentDB = await Aliment.find({name:req.body.foodName});
    let objects = await Aliment.find();
    
    res.render('../views/mainpage.ejs',{ aliment: alimentDB[0]});
})

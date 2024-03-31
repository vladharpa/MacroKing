import { Recipe } from "../models/recipe.model.js";
import { app } from "../config/express.js";
import  path  from "path";

const fileDirectory = path.resolve('src','views');

app.get('/mainpage',(req,res)=>{

    res.render('mainpage',{aliment:undefined});

});

app.post('/mainpage',async (req,res)=>{
    
    let description = req.body.description;
    let macronutrients=req.body.macronutrients;
    let image=req.body.image;
    image = Buffer.from(image);
    image = image.toString('base64');
    
    Recipe.create({description:description,macronutrients:macronutrients,image:image})
    res.redirect('/mainpage')
})

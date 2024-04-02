import { Recipe } from "../models/recipe.model.js";
import { app } from "../config/express.js";
import  path  from "path";
const fileDirectory = path.resolve('src','views');


app.get('/mainpage',(req,res)=>{

    res.render('mainpage',{error:""});

});

app.post('/mainpage',async (req,res)=>{
    let name=req.body.Name;
    let ingredients=req.body.Ingredients;
    let preparation = req.body.PreparationMode;
    let macronutrients=req.body.Macronutrients;
    let kcalories=req.body.Calories;
    let image=req.body.image;
    image = Buffer.from(image);
    image = image.toString('base64');
    if (name == "") {
        res.render('mainpage', { error: 'name' });
    } else if (ingredients == "") {
        res.render('mainpage', { error: 'ingredients' });
    } else if (preparation == "") {
        res.render('mainpage', { error: 'preparation' });
    } else if (kcalories == "") {
        res.render('mainpage', { error: 'kcalories' });
    } else if (macronutrients == "") {
        res.render('mainpage', { error: 'macronutrients' });
    } else if (image == "") {
        res.render('mainpage', { error: 'image' });
    } else {
        await Recipe.create({ name: name, ingredients: ingredients, preparation: preparation, macronutrients: macronutrients, kcalories: kcalories, image: image });
        res.redirect('/mainpage');
    }
    
    
    
})



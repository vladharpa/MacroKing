import { Recipe } from "../models/recipe.model.js";
import { app } from "../config/express.js";
import  path  from "path";
const fileDirectory = path.resolve('src','views');


app.get('/mainpage',(req,res)=>{

    res.render('mainpage',{error:""});

});

app.post('/mainpage',async (req,res)=>{
const error = await validateRequestBody(req.body);
console.log(error);
if(error!='success') {
  res.render('mainpage.ejs', { error:error });
}   
})

async function validateRequestBody(recipe){
    let {name,ingredients,preparationmode,calories,macronutrients,image}=recipe;
    console.log(name,ingredients,preparationmode,calories,macronutrients,image);

image = Buffer.from(image);
image = image.toString('base64');

console.log(name,ingredients,preparationmode,calories,macronutrients,image);

if (name == "") {
    return `name`;
} else if (ingredients == "") {
    return `ingredients`;
} else if (preparationmode == "") {
    return error
} else if (calories == "") {
    return `calories`;
} else if (macronutrients == "") {
    return `macronutrients`;
} else if (image == "") {
    return `image`;
} else {
    await Recipe.create({ name: name, ingredients: ingredients, preparation: preparation, macronutrients: macronutrients, kcalories: kcalories, image: image });
    return `success`;
}
}




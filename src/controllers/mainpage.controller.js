import { Recipe } from "../models/recipe.model.js";
import { app } from "../config/express.js";
import  path  from "path";
const fileDirectory = path.resolve('src','views');
const EMPTY_STRING = "";

app.get('/mainpage',(req, res)=>{
    res.render('mainpage',{ error: "" });
});

app.post('/mainpage', async (req, res) => {
    const errorField = await validateRequestBody(req.body);
    if(errorField) {
        res.render('mainpage.ejs', { error: errorField });
    } else {
        const imageEncoded = Buffer.from(req.body.image, 'base64');
        const recipe = {
            ...req.body,
            image: imageEncoded
        }
        await Recipe.create(recipe);
    }
});

async function validateRequestBody(requestBody){
    let { name, ingredients, preparationmode, calories, macronutrients, image } = requestBody;

    if (name === EMPTY_STRING) {
        return `name`;
    }
    if (ingredients === EMPTY_STRING) {
        return `ingredients`;
    } 
    if (preparationmode === EMPTY_STRING) {
        return error
    }
    if (calories === EMPTY_STRING) {
        return `calories`;
    }
    if (macronutrients === EMPTY_STRING) {
        return `macronutrients`;
    }
    if (image == EMPTY_STRING) {
        return `image`;
    }
    return null;
}

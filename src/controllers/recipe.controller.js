import { Recipe } from "../models/recipe.model.js";
import { app } from "../config/express.js";
import  path  from "path";
const fileDirectory = path.resolve('src','views');
const EMPTY_STRING = "";
import { Buffer } from 'buffer';
import { decode } from "punycode";

app.get('/recipes/new',(req, res)=>{
    res.render('createRecipe.ejs',{ error: "" });
});

app.post('/recipes/new', async (req, res) => {
    const errorField = await validateRequestBody(req.body);
    if(errorField) {
        res.render('createRecipe.ejs', { error: errorField });
    } else {
        const imageEncoded = Buffer.from(req.body.image).toString('base64');
        const recipe = {
            ...req.body,
            image: imageEncoded
        }
        await Recipe.create(recipe);
        res.redirect('/recipes/new');
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


app.get('/recipe/:recipeId', async (req, res) => {
    try {
        const { recipeId } = req.params;
        const recipe = await Recipe.findOne({ _id: recipeId }); // 
        console.log({...recipe.toObject()})
        if (!recipe) {
            return res.status(404).send('Recipe not found');
        }

        const decodedImg = Buffer.from(recipe.image, 'base64').toString('binary');

        res.render('recipe.ejs', { ...recipe.toObject(), image: decodedImg });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});


function getFileExtension(filename) {
    return filename.split('.').pop();
}
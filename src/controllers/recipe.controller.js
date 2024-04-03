import { Recipe } from "../models/recipe.model.js";
import { app } from "../config/express.js";
import { upload } from "../config/fileUpload.js";
const EMPTY_STRING = "";

app.get('/recipes/new',(req, res)=>{
    res.render('createRecipe.ejs',{ error: "" });
});

app.post('/recipes/new', upload.single('image'), async (req, res) => {
    const errorField = await validateRequestBody(req.body);
    if(errorField) {
        res.render('createRecipe.ejs', { error: errorField });
    } else {
        const imageEncoded = Buffer.from(req.file.buffer).toString('base64');
        const recipe = await Recipe.create({
            ...req.body,
            image: imageEncoded
        });
        res.redirect(`/recipes/${recipe.id}`);
    }
});

function validateRequestBody(requestBody){
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


app.get('/recipes/:recipeId', async (req, res) => {
    try {
        const { recipeId } = req.params;
        const recipe = await Recipe.findOne({ _id: recipeId });
        if (!recipe) {
            return res.status(404).send('Recipe not found');
        }
        res.render('recipe.ejs', { recipe });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});


function getFileExtension(filename) {
    return filename.split('.').pop();
}
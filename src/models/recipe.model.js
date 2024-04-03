import {Schema,model} from 'mongoose';

const recipeSchema = new Schema({
    name:String,
    ingredients:String,
    preparationmode:String,
    calories:Number,
    macronutrients:String,
    image:String,
})

export const Recipe=new model('recipies', recipeSchema);
import {Schema,model} from 'mongoose';

const recipeSchema = new Schema({
    name:String,
    ingredients:String,
    preparationmode:String,
    calories:Number,
    macronutrients:String,
    image:Buffer,
})

export const Recipe=new model('recipies',recipeSchema);
import {Schema,model} from 'mongoose';

const recipeSchema = new Schema({
    name:String,
    ingredients:String,
    preparation:String,
    kcalories:Number,
    macronutrients:String,
    image:Buffer,
})

export const Recipe=new model('recipies',recipeSchema);
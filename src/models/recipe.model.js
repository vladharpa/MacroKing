import {Schema,model} from 'mongoose';

const recipeSchema = new Schema({
    description:String,
    macronutrients:String,
    image:Buffer,
})

export const Recipe=new model('recipies',recipeSchema);
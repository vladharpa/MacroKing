import { Schema, model } from "mongoose";

const alimentSchema = new Schema({
    
    name:String,
    link:String,
    paragraph:String,
    image:{
        data:Buffer,
        contentType:String,
    },
    macronutriients:{
        calories:Number,
        protein:Number,
        carbs:Number,  
        fats:Number,
    }
    
    
});

export const Aliment = model("Recipie", alimentSchema);
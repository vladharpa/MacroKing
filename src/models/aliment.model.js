import { Schema, model } from "mongoose";

const alimentSchema = new Schema({
    name:String,
    calories: Number,
    protein:Number,
    carbs:Number,
    fat:Number
    
    
});
export const Aliment = model("aliment", alimentSchema);
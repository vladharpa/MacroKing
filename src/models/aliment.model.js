import { Schema, model } from "mongoose";

const alimentSchema = new Schema({
    calorii: String,
    protein:String,
    carbs:String,
    fats:String
});
export const Alimente = model("aliment", alimentSchema);
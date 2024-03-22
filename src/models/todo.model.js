import { Schema, model } from "mongoose";

const todoSchema = new Schema({
    text: String
});
export const Todo = model("Todo", todoSchema);
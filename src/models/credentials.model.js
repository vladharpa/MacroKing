import { Schema, model } from "mongoose";

const usersSchema = new Schema({
    
    email:String,
    password:String
})

export const Users = new model("users",usersSchema);
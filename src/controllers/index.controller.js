import { Todo } from "../models/todo.model.js";
import { app } from "../config/express.js";

app.get("/", async (req, res) => {
    const todos = await Todo.find({});
    res.render("index.ejs", {todos});
});

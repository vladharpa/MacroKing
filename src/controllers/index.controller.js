import { Todo } from "../models/todo.model"

app.get("/", async (req, res) => {
    const todos = await Todo.find({});
    res.render("index.ejs", {todos});
})
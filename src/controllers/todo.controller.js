import { Todo } from "../models/todo.model.js";
import { app } from "../config/express.js";

app.get("/todo/:id", async (req, res) => {
    const id = req.params.id;
    const todo = await Todo.findById(id);
    res.render("todo.ejs", {
        todo: todo
    });
});

app.post("/todo", async (req, res) => {
    await Todo.create(req.body);
    res.redirect("/");
});

app.delete("/todo/:id", async (req, res) => {
    const id = req.params.id;
    await Todo.findByIdAndDelete(id);
    res.redirect("/");
});

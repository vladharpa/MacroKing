import { app } from "../config/express";


app.post("/todo", async (req, res) => {
    await Todo.create(req.body);
    res.redirect("/");
});

app.delete("/todo/:id", async (req, res) => {
    const id = req.params.id;
    await Todo.findByIdAndDelete(id);
    res.redirect("/");
});

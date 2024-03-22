import { app } from "../app";

app.get("/seed", async (req, res) => {
    await Todo.remove({});
    // add sample todos
    await Todo.create([{text: "Eat Breakfast"}, {text: "Eat Lunch"}, {text: "Eat Dinner"}]);
    // redirect back to main page
    res.redirect("/");
});
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let rewards = [];

app.post("/reward", (req, res) => {
    rewards.push(req.body);
    res.json({
        message: "Reward Distributed"
    });
});

app.get("/reward", (req, res) => {
    res.json(rewards);
});
app.get("/", (req, res) => {
    res.send("Internship Reward API Running");
});
app.listen(5000);

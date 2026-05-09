const express = require("express");

const app = express();

app.use(express.json());

let notes = [];

// Home route
app.get("/", (req, res) => {
    res.send("Notes API Running");
});

// Get all notes
app.get("/notes", (req, res) => {
    res.json(notes);
});

// Add note
app.post("/notes", (req, res) => {
    const note = {
        id: Date.now(),
        text: req.body.text
    };

    notes.push(note);

    res.status(201).json(note);
});

// Delete note
app.delete("/notes/:id", (req, res) => {
    const id = Number(req.params.id);

    notes = notes.filter(note => note.id !== id);

    res.json({
        message: "Note deleted"
    });
});

const PORT = 8081;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
// Importing required packages
const express = require("express");
const fs = require("fs");
const path = require("path");
const noteData = require("./db/db.json");
const uuid = require("./helpers/uuid");

// setting port for web app
const PORT = 3003;

// creating new express instance
const app = express();

app.use(express.static("public"));

app.get("/notes", (req, res) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, "public/notes.html"));
  console.log("Hitting notes");
});

app.get("/api/notes", (req, res) => res.json(noteData));

app.post("/api/notes", (req, res) => {
  noteData.push(req.body);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);

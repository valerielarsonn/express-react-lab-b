// Import Dependencies
const express = require("express");
const cors = require("cors");

// Import JSON files
const projects = require("./projects.json");
const about = require("./about.json");

// Create app object
const app = express();

// Set up middleware
app.use(cors());

// Home route for testing app
app.get("/", (req, res) => {
    res.send("HeLlOoOoOoO!!!")
});

// Route for retrieving projects
app.get("/projects", (req, res) => {
    // Send projects via JSON
    res.json(projects);
});

// Route for retrieving about info
app.get("/about", (req, res) => {
    // Send about via JSON
    res.json(about);
});

// Declare a variable for port number
const PORT = process.env.PORT || 4000;

// Turn on the server listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

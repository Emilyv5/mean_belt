const mongoose = require("mongoose");

const authors = require("../controllers/belts.js");

module.exports = function(app) {
    app.get("/pet", (req, res) => {
        authors.display(req, res);
    });

    app.get("/pet/:id", (req, res) => {
        authors.getpet(req, res);
    });

    app.post("/pet", (req, res) => {
        authors.add(req, res);
    });

    app.put("/pet/:id", (req, res) => {
        authors.update(req, res);
    });

    app.delete("/pet/:id", (req, res) => {
        authors.delete(req, res);
    });
};

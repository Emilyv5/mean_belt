const mongoose = require("mongoose");

const Pet = require("../models/belt.js");

module.exports = {
    display: function(req, res) {
        Pet.find({})
            .collation({ locale: "en" })
            .sort({ type: 1 })
            .then(users => res.json(users))
            .catch(err => res.json(err));
    },

    add: function(req, res) {
        Pet.create(req.body)
            .then(useradd => res.json(useradd))
            .catch(err => res.json(err));
    },

    update: function(req, res) {
        Pet.update({ _id: req.params.id }, req.body, {
            runValidators: true
        })
            .then(userdelete => res.json(userdelete))
            .catch(err => res.json(err));
    },

    getpet: function(req, res) {
        Pet.findOne({ _id: req.params.id })
            .then(users => res.json(users))
            .catch(err => res.json(err));
    },

    delete: function(req, res) {
        Pet.remove({ _id: req.params.id })
            .then(updated => res.json(updated))
            .catch(err => res.json(err));
    }
};

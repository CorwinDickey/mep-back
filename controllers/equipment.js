// ==============================================================
// DEPENDENCIES
// ==============================================================
const express = require("express");
const EQUIPMENT = express.Router();
const Equipment = require("../models/equipment.js");

// ==============================================================
// CREATE ROUTE
// ==============================================================
EQUIPMENT.post('/', (req, res) => {
    Equipment.create(req.body, (error, createdEquipment) => {
    if (error) {
        res.status(400).json({ error: error.message })
    };
    //console.log("Testing equipment creation route:", createdEquipment)
    res.status(200).send(createdEquipment) 
    });
});

// ==============================================================
// READ ROUTES
// ==============================================================
EQUIPMENT.get("/:id", (req, res) => {
    Equipment.findOne({"_id": req.params.id}, (err, foundEquipment) => {
        if (err) {
            res.status(400).json({ error: err.message })
        }
        res.status(200).json(foundEquipment)
    })
})

EQUIPMENT.get("/", (req, res) => {
    Equipment.find({}, (err, foundEquipment) => {
        if (err) {
            res.status(400).json({ error: err.message });
        };
        res.status(200).json(foundEquipment);
    });
});

// ==============================================================
// DELETE ROUTE
// ==============================================================
EQUIPMENT.delete("/:id", (req, res) => {
    Equipment.findByIdAndRemove(req.params.id, (err, deletedEquipment) => {
        if (err) {
            res.status(400).json({ error: err.message});
        };
        res.status(200).json(deletedEquipment);
    });
});

// ==============================================================
// UPDATE ROUTE
// ==============================================================
EQUIPMENT.put("/:id", (req, res) => {
    Equipment.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedEquipment) => {
        if (err) {
            res.status(400).json({ error: err.message })
        };
        res.status(200).json(updatedEquipment)
    });
});

module.exports = EQUIPMENT;
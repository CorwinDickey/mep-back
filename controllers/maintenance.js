// ==============================================================
// DEPENDENCIES
// ==============================================================
const express = require("express");
const MAINTENANCE = express.Router();
const Maintenance = require("../models/maintenance.js");

// ==============================================================
// CREATE ROUTE
// ==============================================================
MAINTENANCE.post("/", async (req, res) => {
    Maintenance.create(req.body, (error, createdMaintenance) => {
    if (error) {
        res.status(400).json({ error: error.message })
    };
    res.status(200).send(createdMaintenance) 
    });
});


MAINTENANCE.get("/:id", (req, res) => {
    Maintenance.find({}, (err, foundMaintenance) => {
        if (err) {
            res.status(400).json({ error: err.message });
        };
        res.status(200).json(foundMaintenance);
    });
});

// ==============================================================
// DELETE ROUTE
// ==============================================================
// MAINTENANCE.delete("/:id", (req, res) => {
//     Maintenance.findByIdAndRemove(req.params.id, (err, deletedMaintenance) => {
//         if (err) {
//             res.status(400).json({ error: err.message});
//         }       
//         res.status(200).json(deletedMaintenance);
//     });
// });

// ==============================================================
// UPDATE ROUTE
// ==============================================================
// MAINTENANCE.put('/:id', (req, res) => {
//     Maintenance.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedMaintenance) => {
//         if (err) {
//             res.status(400).json({ error: err.message })
//         }
//         res.status(200).json(updatedMaintenance)
//     });
// });

module.exports = MAINTENANCE;
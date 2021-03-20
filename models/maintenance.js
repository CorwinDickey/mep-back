const mongoose = require("mongoose");

const maintenanceSchema = mongoose.Schema({
    frequency: {type: String, default: "Weekly"},
    instructions: {type: String, default: "Maintenance required: "},

});

const Maintenance = mongoose.model("Maintenance", maintenanceSchema);
module.exports = Maintenance;
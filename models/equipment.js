const mongoose = require("mongoose")

const equipmentSchema = mongoose.Schema({
    buyer: String,
    buyerEmail: String,
    buyerPhone: String,
    damage: Boolean,
    location: {type: String, required: true},
    poNumber: {type: String, required: true},
    receiptInspection: {type: Boolean, default: false},
    tag: {type: String, required: true},
    type: String,
    vendor: {type: String, required: true},
    vendorAddress: String,
    vendorEmail: String,
    vendorPhone: String,
    // name: {type: String},
    // equipDescription: {type: String, default: "Describe equipment: "},
    // equipImage: String,
    // keepCovered: {type: Boolean, default: true},
    // indoors: Boolean,
    // damageDescription: {type: String, default: "Describe any damage: "},
    // damageImage: String,
    // vendorContact: String,
    maintenance: {type: [mongoose.Schema.Types.ObjectId]},
    

});

module.exports = mongoose.model("Equipment", equipmentSchema);
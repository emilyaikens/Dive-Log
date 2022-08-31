const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const diveSchema = new Schema ({
    number: {type: Number},
    site: {type: String},
    buddy: {type: String},
    date: {type: Date},
    time: {type: Time},
    protection: {type: String},
    weight: {type: Number},
    weightUnits: {type: String},
    type: {type: String},
    conditions: {type: String},
    airTemp: {type: Number},
    surfaceTemp: {type: Number},
    waterTemp: {type: Number},
    tempUnits: {type: String},
    startAir: {type: Number},
    endAir: {type: Number},
    airUnits: {type: String},
    maxDepth: {type: Number},
    depthUnits: {type: String},
    bottomTime: {type: Number},
    notes: {type: String},
}, {
    timestamps: true
});

module.exports = mongoose.model('Dive', diveSchema);


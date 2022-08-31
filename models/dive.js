const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const diveSchema = new Schema ({
    number: {type: Number},
    site: {type: String},
    buddy: {type: String},
    date: {type: Date},
    time: {type: String},
    protection: {type: String},
    weight: {type: Number},
    weightUnits: {
        type: String,
        enum: ['kg', 'ib']
        },
    entry: {
        type: String,
        enum: ['shore','boat','other']
        },
    conditions: {type: String},
    airTemp: {type: Number},
    surfaceTemp: {type: Number},
    waterTemp: {type: Number},
    tempUnits: {
        type: String,
        enum: ['C', 'F']
    },
    startAir: {type: Number},
    endAir: {type: Number},
    airUnits: {
        type: String,
        enum: ['psi', 'bar']
        },
    maxDepth: {type: Number},
    depthUnits: {
        type: String,
        enum: ['ft', 'm']
        },
    bottomTime: {type: Number},
    notes: {type: String},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
}, {
    timestamps: true
});

module.exports = mongoose.model('Dive', diveSchema);


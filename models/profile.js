const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const certificateSchema = new Schema ({
    certOrg: {type: String},
    cert: {type: String},
    expiration: {type: String}
}, {
    timestamps: true
});

const profileSchema = new Schema ({
    nickname: {type: String},
    startDate: {type: String},
    certificates: [certificateSchema],
    favorite: {type: String},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
}, {
    timestamps: true
});

module.exports = mongoose.model('Profile', profileSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const certificateSchema = new Schema ({
    cert: {
        type: String,
        required: true},
    expiration: {type: String}
}, {
    timestamps: true
});

const profileSchema = new Schema ({
    nickname: {type: String},
    startDate: {type: String},
    certs: [certificateSchema],
    favorite: {type: String},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
}, {
    timestamps: true
});

module.exports = mongoose.model('Profile', profileSchema);
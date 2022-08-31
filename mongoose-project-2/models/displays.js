const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const displaySchema = new Schema ({
    view: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Display', displaySchema);
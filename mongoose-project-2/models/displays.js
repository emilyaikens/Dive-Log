const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const displaySchema = new Schema ({
    question: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Display', displaySchema);
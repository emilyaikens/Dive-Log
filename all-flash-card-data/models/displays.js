const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const displaySchema = new Schema ({
    question: {
        type: String,
        required: true
    },
    deck: {type: Schema.Types.ObjectId, ref: 'Deck' }
}, {
    timestamps: true
});

module.exports = mongoose.model('Display', displaySchema);
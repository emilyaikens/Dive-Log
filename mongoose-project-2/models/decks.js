const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = newSchema ({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

const deckSchema = new Schema ({
    deckName: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId, 
        ref: 'User'
    }, 
    cards: [cardSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Deck', deckSchema);
const Deck = require('../models/decks');

function createCard (req,res) {
    req.body.user = req.user._id;
    const card = new Deck(req.body);
    deck.save(function(err) {
        if (err) return res.redirect('/deck/new');
        res.redirect(`/decks/${deck._id}/edit`);
    });
};

module.exports = {
    create: createCard,
  };
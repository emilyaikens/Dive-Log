const Deck = require('../models/decks');



function create(req, res) {
    req.body.user = req.user._id;
    Deck.findById(req.params.id, function (error, deck) {
        deck.cards.push(req.body);
        deck.save(function (error) {
            res.redirect(`/decks/${deck._id}/edit`);
        });
    });
 };

module.exports = {
    create,
  };
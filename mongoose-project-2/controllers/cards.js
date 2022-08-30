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

 function deleteCard(req,res) {
    Deck.findOne({'cards._id': req.params.id}).then(function (deck) {
        const card = deck.cards.id(req.params.id);
        card.remove();
        deck.save().then(function() {
            res.redirect(`/decks/${deck._id}/edit`);
        }).catch(function(error) {
            return next(error);
        });
    });   
 };

 function show (req,res) {
    console.log("")
 };

module.exports = {
    create,
    delete: deleteCard,
    show,
  };
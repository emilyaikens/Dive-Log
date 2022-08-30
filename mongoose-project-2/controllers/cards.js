const Deck = require('../models/decks');



function create(req, res) {
    req.body.user = req.user._id;
    Deck.findById(req.params.id, function (error, deck) {
        deck.cards.push(req.body); //add form info to card schema
        deck.save(function (error) {
            console.log(deck.display);
            console.log(deck.cards[0]);
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
    Deck.findOne({'cards._id': req.params.id}).then(function (deck) {
        const card = deck.cards.id(req.params.id);
        res.render('cards/edit', {title: "Edit Card", card, deck})
        }).catch(function(error) {
            return next(error);
        });  
};

function update(req,res) {
    Deck.findOne({'cards._id': req.params.id}).then(function (deck) {
        const card = deck.cards.id(req.params.id);
        card.question = req.body.question;
        card.answer = req.body.answer;
        deck.save().then(function() {
            res.redirect(`/decks/${deck._id}/edit`);
        }).catch(function(error) {
            return next(error);
        });
    });    
};

module.exports = {
    create,
    delete: deleteCard,
    show,
    update,
  };
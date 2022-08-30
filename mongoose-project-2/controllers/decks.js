const Deck = require('../models/decks');

function index(req, res) {
    Deck.find({}, function(err, decks) {
      res.render('decks/index', { title: 'All Decks', decks });
    });
};

function newDeck (req, res) {
    res.render('decks/new', {title: "New Deck"});
};

function create (req,res) {
    const deck = new Deck(req.body);
    deck.save(function(err) {
        if (err) return res.redirect('/deck/new');
        res.redirect(`/decks/${deck._id}/edit`);
    })
};

  module.exports = {
    index,
    new: newDeck,
  };
const Deck = require('../models/decks');

function index(req, res) {
    Deck.find({}, function(err, decks) {
      res.render('decks/index', { title: 'All Decks', decks });
    });
  }

function newDeck (req, res) {
    res.render('decks/new', {title: "New Deck"});
}

  module.exports = {
    index,
    newDeck,
  };
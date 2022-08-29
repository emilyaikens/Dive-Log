const Deck = require('../models/decks');

function index(req, res) {
    Deck.find({}, function(err, decks) {
      res.render('decks/index', { title: 'All Decks', decks });
    });
  }

  module.exports = {
    index,
  };
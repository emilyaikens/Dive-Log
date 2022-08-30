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
    req.body.user = req.user._id;
    const deck = new Deck(req.body);
    deck.save(function(err) {
        if (err) return res.redirect('/deck/new');
        //res.redirect('/decks');
        res.redirect(`/decks/${deck._id}/edit`);
    });
};

function show (req,res) {
    Deck.findById(req.params.id, function (error, deck) {
        res.render('decks/edit', {title: "Edit Deck", deck})
    });
};

  module.exports = {
    index,
    new: newDeck,
    create,
    show
  };
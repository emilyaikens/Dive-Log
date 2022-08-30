const Deck = require('../models/decks');

//sends all deck information to the "all decks" page, aka views/decks/index
function index(req, res) {
    Deck.find({}, function(err, decks) {
      res.render('decks/index', { title: 'All Decks', decks });
    });
};

//renders the new deck page
function newDeck (req, res) {
    res.render('decks/new', {title: "New Deck"});
};

//create a new deck, get user input from form in views/decks/new
function create (req,res) {
    req.body.user = req.user._id;
    const deck = new Deck(req.body);
    deck.save(function(err) {
        if (err) return res.redirect('/deck/new');
        res.redirect(`/decks/${deck._id}/edit`);
    });
};

//send selected deck information to the "edit deck" page
function show (req,res) {
    Deck.findById(req.params.id, function (error, deck) {
        res.render('decks/edit', {title: "Edit Deck", deck})
    });
};

function flash (req, res) {
    Deck.findById(req.params.id, function (err, deck) {
        res.render('decks/show', {title: `${deck.deckName}`, deck})
    });
};

  module.exports = {
    index,
    new: newDeck,
    create,
    show,
    flash
  };
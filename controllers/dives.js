const Dive = require('../models/dive');


function index(req, res) {
    Dive.find({}, function(err, dives) {
        res.render('dives/index', { title: 'My Dives', dives })
    });
};

function newDive (req, res) {
    res.render('dives/new', {title: "New Dive"});
};

function create (req, res) {
    req.body.user = req.user._id;
    const dive = new Dive(req.body);
    dive.save(function(err) {
        if (err) return res.redirect('/dives');
        res.redirect('/dives');
    });
};

function show (req, res) {
    Dive.findById(req.params.id, function (err, dive) {
        res.render('dives/show', {title: `${dive.number}`, dive })
    });
};

module.exports = {
    index,
    new: newDive,
    create,
    show
  };
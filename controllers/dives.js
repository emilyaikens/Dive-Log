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

function edit (req, res) {
    Dive.findById(req.params.id, function (error, dive) {
        res.render('dives/edit', {title: "Edit Dive", dive})
    });
}

function updateDive (req, res) {
    Dive.findById(req.params.id, function (err, dive) {
        dive.update(req.body, function (err, dive) {
            if (err) return res.redirect('/dives');
        });
        res.redirect(`/dives/${dive._id}`);
    });
};    

function deleteDive (req,res) {
    Dive.findById(req.params.id, function (error, dive) {
        dive.remove(function (err) {
            if (err) return res.redirect('/dives');
            res.redirect('/dives');
        });
        // dive.save(function(err) {
        //     if (err) return res.redirect(`/decks`);
        //     res.redirect(`/decks`);
        // });
    });
};

module.exports = {
    index,
    new: newDive,
    create,
    show, 
    edit,
    update: updateDive,
    delete: deleteDive
  };
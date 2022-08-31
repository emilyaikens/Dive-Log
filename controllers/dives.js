const Dive = require('../models/dive');


function index(req, res) {
    Dive.find({}, function(err, dives) {
        res.render('dives/index', { title: 'My Dives', dives })
    });
};

function newDive (req, res) {
    res.render('dives/new', {title: "New Dive"});
};

module.exports = {
    index,
    new: newDive,
  };
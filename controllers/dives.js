const Dive = require('../models/dive');

//called from login, or from header link "my dives"
function index(req, res) {
    Dive.find({'user': req.user}, function (err, dives) {
        res.render('dives/index', {title: 'My Dives', dives})
    }); 
};

//called from the new header link or link in views/dives/show
function newDive (req, res) {
    res.render('dives/new', {title: "New Dive"}); //render new dives view
};


//called from new dive form
function create (req, res) {
    req.body.user = req.user._id; //assigns form user to current user   
    const dive = new Dive(req.body);
    dive.save(function(err) { // save the form information to a new dive schema
        if (err) return res.redirect('/dives');
        res.redirect('/dives'); //redirect to my dives
    });
};

//called from the my dives page, the "details"links
function show (req, res) {
    Dive.findById(req.params.id, function (err, dive) {
        res.render('dives/show', {title: `dive no ${dive.number}`, dive }) //render the show view
    });
};

//called from the show view, link to edit dive
function edit (req, res) {
    Dive.findById(req.params.id, function (error, dive) {
        res.render('dives/edit', {title: "Edit Dive", dive}) //renders edit dive page
    });
}

//called from the form on edit dive page
function updateDive (req, res) {
    Dive.findById(req.params.id, function (err, dive) {
        dive.update(req.body, function (err, dive) { //updates dive object with date from the edit form
            if (err) return res.redirect('/dives');
        });
        res.redirect(`/dives/${dive._id}`); //redirect to the show page for that particular dive
    });
};    

//called from the edit dive page
function deleteDive (req,res) {
    Dive.findById(req.params.id, function (error, dive) { 
        dive.remove(function (err) { //remove the dive object
            if (err) return res.redirect('/dives'); 
            res.redirect('/dives'); //redirect to my dives
        });
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
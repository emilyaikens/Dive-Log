const Profile = require('../models/profile');


function index(req, res) {
    Profile.findOne({'user': req.user}, function (err, profile) {
        res.render('profiles/index', {title: 'My Profile', profile})
    }); 
};

function newProfile (req, res) {
    Profile.findOne({'user': req.user}, function (err, profile) {
        res.render('profiles/new', {title: 'Edit Profile', profile})
    }); 
};

function createProfile (req, res) {
    req.body.user = req.user._id;
    const profile = new Profile(req.body);
    profile.save(function(err) {
        if (err) return res.redirect('/profile');
        res.redirect('/profile');
    });
}

module.exports = {
    index,
    new: newProfile,
    create: createProfile,
  };
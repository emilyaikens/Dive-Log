const Profile = require('../models/profile');


function index(req, res) {
    Profile.findOne({'user': req.user}, function (err, profile) {
        res.render('profiles/index', {title: 'My Profile', profile})
    }); 
};

function editProfile (req, res) {
    Profile.findOne({'user': req.user}, function (err, profile) {
        res.render('profiles/new', {title: 'Edit Profile', profile})
    }); 
};

module.exports = {
    index,
    edit: editProfile,
  };
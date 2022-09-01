const Profile = require('../models/profile');

//called from the "my profile" link in header
function index(req, res) {
    Profile.findOne({'user': req.user}, function (err, profile) {
        res.render('profiles/index', {title: 'My Profile', profile}) //renders index view
    }); 
};

//called from Add Information link in the index view
function newProfile (req, res) {
    Profile.findOne({'user': req.user}, function (err, profile) {
        res.render('profiles/new', {title: 'New Profile', profile})
    }); 
};

//called from the form in the new view
function createProfile (req, res) {
    req.body.user = req.user._id; //assign user id in profile object to current user    
    const profile = new Profile(req.body);
    profile.save(function(err) {
        if (err) return res.redirect('/profile');
        res.redirect('/profile'); //redirect to the index view
    });
};

//called from the index view, link to edit profile view
function editProfile (req, res) {
    Profile.findOne({'user': req.user}, function (err, profile) {
        res.render('profiles/edit', {title: 'Edit Profile', profile})
    }); 
};

//called from form in edit profile view
function updateProfile (req,res) {
    Profile.findById(req.params.id, function (err, profile) {
        profile.update(req.body, function (err, profile) { //updates profile data with data from the form
            if (err) return res.redirect('/profile');
        });
        res.redirect('/profile'); //redirects to profile page
    });
};

function cert (req,res) {
    Profile.findOne({'user': req.user}, function (err, profile) {
        res.render('profiles/certs', {title: 'New Cert', profile})
    }); 
};

module.exports = {
    index,
    new: newProfile,
    create: createProfile,
    edit: editProfile,
    update: updateProfile,
    cert,
  };
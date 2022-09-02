const Profile = require('../models/profile');

//called from the "my profile" link in header
function index(req, res) {
    Profile.findOne({'user': req.user}, function (err, profile) { //find profile with user id of current user
        res.render('profiles/index', {title: 'My Profile', profile}) //render index view
    }); 
};

//called from Add Information link in the index view
function newProfile (req, res) {
    Profile.findOne({'user': req.user}, function (err, profile) { //find profile with user id of current user
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
    Profile.findOne({'user': req.user}, function (err, profile) { //find profiles with user id of current user
        res.render('profiles/edit', {title: 'Edit Profile', profile})
    }); 
};

//called from form in edit profile view
function updateProfile (req,res) {
    Profile.findById(req.params.id, function (err, profile) { //find profile by id
        profile.update(req.body, function (err, profile) { //updates profile data with data from the form
            if (err) return res.redirect('/profile');
        });
        res.redirect('/profile'); //redirects to profile page
    });
};

//called from link in profile index view
function cert (req,res) {
    Profile.findOne({'user': req.user}, function (err, profile) { //find profiles with user id of current user
        res.render('profiles/certs', {title: 'New Cert', profile})
    }); 
};

//called from form in certs view
function add (req, res) {  
    Profile.findOne({'user': req.user}, function (err, profile) { //find profiles with user id of current user
        profile.certs.push(req.body); //push cert to to profile cert array
        profile.save(function (err) {
            res.redirect('/profile/certs')
        });
    });
};

//called from button in certs view
function deleteCert (req,res) {
    Profile.findOne({'certs._id': req.params.id}).then(function (profile) { //find cert by id
        const cert = profile.certs.id(req.params.id);
        cert.remove(); //delete cert
        profile.save(function (err) {
            res.redirect('/profile/certs')
        });
    });
};

module.exports = {
    index,
    new: newProfile,
    create: createProfile,
    edit: editProfile,
    update: updateProfile,
    cert,
    add,
    delete: deleteCert,
  };
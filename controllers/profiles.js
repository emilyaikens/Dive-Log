const Profile = require('../models/profile');


function index(req, res) {
    console.log('index function');
    console.log('req.user');
};

module.exports = {
    index,
  };
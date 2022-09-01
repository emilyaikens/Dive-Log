const express = require('express');
const router = express.Router();
const profilesCtrl = require('../controllers/profiles');
const isLoggedIn = require('../config/auth');

router.get('/', isLoggedIn, profilesCtrl.index);

module.exports = router;
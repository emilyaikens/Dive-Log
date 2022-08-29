const express = require('express');
const router = express.Router();
const decksCtrl = require('../controllers/decks');
const isLoggedIn = require('../config/auth');

router.get('/', isLoggedIn, decksCtrl.index);

module.exports = router;
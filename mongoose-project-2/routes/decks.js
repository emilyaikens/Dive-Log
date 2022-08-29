const express = require('express');
const router = express.Router();
const decksCtrl = require('../controllers/decks');
const isLoggedIn = require('../config/auth');

router.get('/', decksCtrl.index);

module.exports = router;
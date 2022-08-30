const express = require('express');
const router = express.Router();
const cardsCtrl = require('../controllers/cards');
const isLoggedIn = require('../config/auth');

router.post('/cards/new', isLoggedIn, cardsCtrl.create);

module.exports = router;
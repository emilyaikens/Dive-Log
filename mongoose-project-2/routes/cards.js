const express = require('express');
const router = express.Router();
const cardsCtrl = require('../controllers/cards');
const isLoggedIn = require('../config/auth');

router.post('/:id/cards/new', isLoggedIn, cardsCtrl.create); //creates new card
router.delete('/:id/cards', isLoggedIn, cardsCtrl.delete); // deletes one card

module.exports = router;
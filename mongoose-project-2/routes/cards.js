const express = require('express');
const router = express.Router();
const cardsCtrl = require('../controllers/cards');
const isLoggedIn = require('../config/auth');

router.post('/:id/cards/new', isLoggedIn, cardsCtrl.create); //creates new card, action from new card form
router.delete('/:id/cards', isLoggedIn, cardsCtrl.delete); // deletes one card
router.get('/:id/edit', isLoggedIn, cardsCtrl.show); //sends card info to controller, will render edit card page
router.put('/:id/update', isLoggedIn, cardsCtrl.update); //action from edit card form, updates card data

module.exports = router;
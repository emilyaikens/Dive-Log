const express = require('express');
const router = express.Router();
const decksCtrl = require('../controllers/decks');
const isLoggedIn = require('../config/auth');

router.get('/', isLoggedIn, decksCtrl.index); //render the index page, aka "my decks"
router.get('/new', isLoggedIn, decksCtrl.new); //render the create new deck page
router.post('/', isLoggedIn, decksCtrl.create); //create a new deck object with info from new deck form
router.get('/:id/edit', isLoggedIn, decksCtrl.show); //send info to edit page
router.get('/:id', isLoggedIn, decksCtrl.flash); //renders cards in show view
router.delete('/:id', isLoggedIn, decksCtrl.delete) //deletes deck

module.exports = router;
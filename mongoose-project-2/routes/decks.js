const express = require('express');
const router = express.Router();
const decksCtrl = require('../controllers/decks');
const isLoggedIn = require('../config/auth');

router.get('/', isLoggedIn, decksCtrl.index);
router.get('/new', isLoggedIn, decksCtrl.new); 
router.post('/', isLoggedIn, decksCtrl.create);
router.get('/:id/edit', isLoggedIn, decksCtrl.show);

module.exports = router;
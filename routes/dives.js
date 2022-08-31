const express = require('express');
const router = express.Router();
const divesCtrl = require('../controllers/dives');
const isLoggedIn = require('../config/auth');

router.get('/', isLoggedIn, divesCtrl.index);
router.get('/new', isLoggedIn, divesCtrl.new);

module.exports = router;
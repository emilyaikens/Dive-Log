const express = require('express');
const router = express.Router();
const profilesCtrl = require('../controllers/profiles');
const isLoggedIn = require('../config/auth');

router.get('/', isLoggedIn, profilesCtrl.index);
router.get('/new', isLoggedIn, profilesCtrl.new);
router.post('/', isLoggedIn, profilesCtrl.create);
router.get('/edit', isLoggedIn, profilesCtrl.edit);
router.put('/:id/update', isLoggedIn, profilesCtrl.update);

module.exports = router;
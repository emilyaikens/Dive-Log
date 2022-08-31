const express = require('express');
const router = express.Router();
const divesCtrl = require('../controllers/dives');
const isLoggedIn = require('../config/auth');

router.get('/', isLoggedIn, divesCtrl.index);
router.get('/new', isLoggedIn, divesCtrl.new);
router.post('/', isLoggedIn, divesCtrl.create);
router.get('/:id', isLoggedIn, divesCtrl.show);
router.get('/:id/edit', isLoggedIn, divesCtrl.edit);
router.put('/:id/update', isLoggedIn, divesCtrl.update);

module.exports = router;
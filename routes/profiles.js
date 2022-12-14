const express = require('express');
const router = express.Router();
const profilesCtrl = require('../controllers/profiles');
const isLoggedIn = require('../config/auth');

router.get('/', isLoggedIn, profilesCtrl.index); //called from the "my profile" link in header
router.get('/new', isLoggedIn, profilesCtrl.new); //called from Add Information link in the index view
router.post('/', isLoggedIn, profilesCtrl.create); //called from the form in the new view
router.get('/edit', isLoggedIn, profilesCtrl.edit); //called from the index view, link to edit profile view
router.put('/:id/update', isLoggedIn, profilesCtrl.update); //called from form in edit profile view
router.get('/certs', isLoggedIn, profilesCtrl.cert); //called from the index view
router.post('/add-cert', isLoggedIn, profilesCtrl.add); //called from certs view form
router.delete('/cert/:id', isLoggedIn, profilesCtrl.delete); //called from certs view

module.exports = router;
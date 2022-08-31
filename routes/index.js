var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Get Flashed' });
});
//eventually change to :
// router.get('/', function(req, res, next) {
//   res.redirect('/movies');
// });

//google login route
router.get('/auth/google', passport.authenticate( //path
  'google', //strategy - required by .authenticate
  {scope: ['profile', 'email']} //options - required by .authenticate
));

//google callback route
router.get('/oauth2callback', passport.authenticate( //path
  'google', //strategy
    {
      successRedirect: '/dives', //where to send user if the login is successful
      failureRedirect: '/' //where to send user if login fails
    }
));

//google logout
router.get("/logout", (req, res) => {
  req.logout(req.user, err => {
      if (err) return next(err);
      res.redirect("/");
  });
});

module.exports = router;

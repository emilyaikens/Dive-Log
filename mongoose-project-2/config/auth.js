module.exports = function isLoggedIn (req, res, next) {
    //let's make sure you are who you say you are
    //then pass that information to the next url
    if (req.isAuthenticated()) return next(); 
    res.redirect('/auth/google'); //else, you'll have to log in again
};
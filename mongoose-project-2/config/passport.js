const passport = require('passport'); //refers to server
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy; //refers to server
const User = require('../models/user'); //get data from user model

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID, // line 6-8, what we (the developer) are giving to google to gain access
    clientSecret: process.env.GOOGLE_SECRET, 
    callbackURL: process.env.GOOGLE_CALLBACK
    }, function (accessToken, refreshToken, profile, cb) { //the user info that google gives us once we gain access. parameters defined by googlestrategy
        //abobe: accessToken, refreshToken, and profile are the what are needed, the cb is a callback function that accepts the user info
        // comparison: documents and test to apply for a drivers licence, the cb is the actual license that you get when you submit your docs and test
            User.findOne({googleId : profile.id}).then(async function(user){ //if user id exists in the database, they're already logged in
            if (user) return cb(null,user); //if the user does exist, return the user
            try{ //if the user does not exist...
                user = await User.create({ //...then create a user
                    name: profile.displayName, //this is a property, not a method
                    googleId: profile.id,
                    email: profile.emails[0].value, //0 because there might be multiple email accounts registered to your google account, this will use the default addresss
                    avatar: profile.photos[0].value //again, 0 calls default, the first one. 
                });
                return cb(null,user);  //return the callback function (cb) which is defined by Google Strategy (line 2)
            }catch (error){
                return cb(error);
            }
        }
    )}
));

passport.serializeUser(function(user, cb) { //returns the data that the passport, which is going to add to the session to track the user
    cb(null, user._id);
})//puts something in 

//passport deserializeUser method is called every timea requrest comes in from an existing logged in user
//this is the method where we return what we want passport to assign to the req.user object
passport.deserializeUser(function(userId, cb) {
    User.findById(userId).then(function(user) { //make sure the user exists
        cb(null, user); //then pass the user document to verify callback function as an argument
    });
});//takes something out
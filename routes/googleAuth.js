const session = require('express-session');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;7
const express = require("express");

const router = express.Router();



//google auth session and passport
router.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false
  }));
  
  router.use(passport.initialize());
  router.use(passport.session());
  
  //google strategy defintion 
  passport.use(new GoogleStrategy({
    clientID: '719235602447-jtoltpnit14qh0p2p2a4q5n1i0fc83ee.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: 'http://localhost:4000/auth/google/callback'
  },
  (accessToken, refreshToken, profile, done) => {
    // Store user data in database or session
    return done(null, profile);
  }));


//Define the serialization and deserialization functions to store and retrieve user data from the session:
  passport.serializeUser((user, done) => {
    done(null, user);
  });
  
  passport.deserializeUser((user, done) => {
    done(null, user);
  });
  

  router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] })
);

router.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    res.send("you logged in with google");
    console.log('welcome from home page');
    res.redirect('/');
   
  }
);

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

//protected route
  router.get('/', (req, res) => {
    if (req.isAuthenticated()) {
      // Render authenticated content
      console.log('welcome from home page');
    } else {
      res.redirect('/login');
    }
  });

  module.exports = router;
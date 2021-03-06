const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs');
const UserModel = require('../models/User.Model');

const { isLoggedIn } = require('../helpers/auth-helper'); // to check if user is loggedIn

router.post('/signup', (req, res) => {
    const {username, email, password } = req.body;
 
    if (!username || !email || !password) {
        res.status(500)
          .json({
            errorMessage: 'Please enter username, email and password'
          });
        return;  
    }

    const myRegex = new RegExp(/^[a-z0-9](?!.*?[^\na-z0-9]{2})[^\s@]+@[^\s@]+\.[^\s@]+[a-z0-9]$/);
    if (!myRegex.test(email)) {
        res.status(500)
          .json({
            errorMessage: 'That\'s not even an email address'
        });
        return;  
    }

    const myPassRegex = new RegExp(/^(?=.*\d).{6,20}$/);
    if (!myPassRegex.test(password)) {
      res.status(500)
          .json({
            errorMessage: 'Can I have a word of 6-20 character and at least 1 number?'
          });
        return;  
    }

    bcrypt.genSalt(12)
      .then((salt) => {
        bcrypt.hash(password, salt)
          .then((passwordHash) => {
            UserModel.create({email, username, passwordHash})
              .then((user) => {
                user.passwordHash = "***";
                req.session.loggedInUser = user;
                res.status(200).json(user);
              })
              .catch((err) => {
                if (err.code === 11000) {
                  res.status(500)
                  .json({
                    errorMessage: 'You\'ve already endowed me with that email or username!'
                  });
                  return;  
                } 
                else {
                  res.status(500)
                  .json({
                    errorMessage: 'Something went wrong! Go to sleep!'
                  });
                  return; 
                }
              })
          });  
  });

});
 
router.post('/login', (req, res) => {
    const {email, password } = req.body;
    if ( !email || !password) {
        res.status(500).json({
            error: 'From the audience, can I have an email and password, please?',
       })
      return;  
    }
    const myRegex = new RegExp(/^[a-z0-9](?!.*?[^\na-z0-9]{2})[^\s@]+@[^\s@]+\.[^\s@]+[a-z0-9]$/);
    if (!myRegex.test(email)) {
        res.status(500).json({
            error: 'Don\'t mean to block but: that\'s not an email address',
        })
        return;  
    }
  
    // Find if the user exists in the database 
    UserModel.findOne({email})
      .then((userData) => {
           //check if passwords match
          bcrypt.compare(password, userData.passwordHash)
            .then((doesItMatch) => {
                //if it matches
                if (doesItMatch) {
                  // req.session is the special object that is available to you
                  userData.passwordHash = "***";
                  req.session.loggedInUser = userData;
                  res.status(200).json(userData)
                }
                //if passwords do not match
                else {
                    res.status(500).json({
                        error: 'This is gibberish to me, I don\'t know that password',
                    })
                  return; 
                }
            })
            .catch(() => {
                res.status(500).json({
                    error: 'Have we even met? I don\'t know that email',
                })
              return; 
            });
      })
      //throw an error if the user does not exists 
      .catch((err) => {
        res.status(500).json({
            error: 'I am not sure you exist, try and sign up first',
            message: err
        })
        return;  
      });
  
});
 
router.get('/logout', (req, res) => {
  req.session.destroy() 
  res.status(204).send()
})

router.get("/user", isLoggedIn, (req, res, next) => {
  res.status(200).json(req.session.loggedInUser);
});


  module.exports = router;
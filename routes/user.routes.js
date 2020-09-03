const express = require('express');
const router  = express.Router();
let GameModel = require('../models/Games.Model')
let UserModel = require('../models/User.Model')
const { isLoggedIn } = require('../helpers/auth-helper');


router.get('/user/:id', isLoggedIn, (req, res) => {
  let user = req.params.id
     GameModel.find({creator: user})
     .populate('creator')
        .then((games) => {
          res.status(200).json(games)
        })
        .catch((err) => {
          res.status(500).json({
          error: 'Something went wrong',
          message: err
        })
        })         
})

module.exports = router
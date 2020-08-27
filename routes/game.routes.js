const express = require('express');
const router  = express.Router();
let GameModel = require('../models/Games.Model')

/* GET home page */

router.get('/games', (req, res) => {
     GameModel.find()
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

router.post('/games/create', (req, res) => {
  const {category, name, description, purpose, credit, video} = req.body;
    console.log(req.body)
    GameModel.create({category, name, description, purpose, credit, video})
          .then((response) => {
               res.status(200).json(response)
          })
          .catch((err) => {
               res.status(500).json({
                    error: 'Something went wrong',
                    message: err
               })
          })         
})



module.exports = router
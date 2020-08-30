const express = require('express');
const router  = express.Router();
let GameModel = require('../models/Games.Model')

const { isLoggedIn } = require('../helpers/auth-helper');
const GamesModel = require('../models/Games.Model');

router.get('/games', isLoggedIn, (req, res) => {
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

router.post('/games/create', isLoggedIn, (req, res) => {
  const {category, name, description, purpose, credit, video} = req.body;
    GameModel.create({category, name, description, purpose, credit, video})
          .then((response) => {
               res.status(200).json(response)
          })
          .catch((err) => {
               console.log('error', err)
               res.status(500).json({
                    error: 'Something went wrong',
                    message: err
               })
          })         
})

router.get('/games/:id', isLoggedIn, (req, res) => {
  GameModel.findById(req.params.id)
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

router.delete('/games/:id', isLoggedIn, (req, res) => {
  GameModel.findByIdAndDelete(req.params.id)
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

router.patch('/games/:id', isLoggedIn, (req, res) => {
  let id = req.params.id
  const {category, name, description, purpose, credit, video} = req.body;
  GamesModel.findByIdAndUpdate(id, {$set: {category: category, name: name, description: description, purpose: purpose, credit: credit, video: video}})
        .then((response) => {
             res.status(200).json(response)
        })
        .catch((err) => {
             console.log(err)
             res.status(500).json({
                  error: 'Something went wrong',
                  message: err
             })
        }) 
})

router.patch('/games/:id/like', isLoggedIn, (req, res) => {
  let id = req.params.id
  const {likes} = req.body;
  GamesModel.findByIdAndUpdate(id, {$set: {likes: likes}})
        .then((response) => {
             res.status(200).json(response)
        })
        .catch((err) => {
             console.log(err)
             res.status(500).json({
                  error: 'Something went wrong',
                  message: err
             })
        }) 
})


module.exports = router
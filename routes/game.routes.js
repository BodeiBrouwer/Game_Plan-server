const express = require('express');
const router  = express.Router();
let GamesModel = require('../models/Games.Model')
let TrainingModel = require('../models/Training.Model')

const { isLoggedIn } = require('../helpers/auth-helper');

router.get('/games', isLoggedIn, (req, res) => {
     GamesModel.find()
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

router.post('/games/create', isLoggedIn, (req, res) => {
  const {category, name, description, purpose, credit, video} = req.body;
    GamesModel.create({category, name, description, purpose, credit, video, creator: req.session.loggedInUser._id})
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
  GamesModel.findById(req.params.id)
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
  GamesModel.findByIdAndDelete(req.params.id)
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
  let user = req.session.loggedInUser._id
  GamesModel.findById(id)
    .then((game) => {
      if(game.likes.includes(user)){
        GamesModel.findByIdAndUpdate(id, {$pull: {likes: user}}, {'new':true})
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
      } else {
        GamesModel.findByIdAndUpdate(id, {$push: {likes: user}}, {'new':true})
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
      }
    })
})

router.patch('/games/:trainingId/:gameId/add', isLoggedIn, (req, res) => {
  let trainingId = req.params.trainingId
  let gameId = req.params.gameId
  TrainingModel.findByIdAndUpdate(trainingId, {$push: {games: gameId }})
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

router.patch('/games/:trainingId/:gameId/delete', isLoggedIn, (req, res) => {
  let trainingId = req.params.trainingId
  console.log(trainingId)
  let gameId = req.params.gameId
  TrainingModel.findByIdAndUpdate(trainingId, {$pull: {games: gameId }})
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
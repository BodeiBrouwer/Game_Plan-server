const express = require('express');
const router  = express.Router();
let TrainingModel = require('../models/Training.Model')

const { isLoggedIn } = require('../helpers/auth-helper');

router.get('/trainings', isLoggedIn, (req, res) => {
  TrainingModel.find({creator: req.session.loggedInUser._id})
          .then((trainings) => {
              res.status(200).json(trainings)
          })
          .catch((err) => {
               res.status(500).json({
                    error: 'Something went wrong',
                    message: err
               })
     })         
})

router.post('/trainings/create', isLoggedIn, (req, res) => {
  const {name, description, duration, notes} = req.body;
    TrainingModel.create({name, description, duration, notes, creator: req.session.loggedInUser._id})
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

router.get('/trainings/:id', isLoggedIn, (req, res) => {
     TrainingModel.findById(req.params.id)
      .populate('games')
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

router.delete('/trainings/:id', isLoggedIn, (req, res) => {
  TrainingModel.findByIdAndDelete(req.params.id)
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

router.patch('/trainings/:id', isLoggedIn, (req, res) => {
  let id = req.params.id
  const {name, duration, description, notes} = req.body;
  TrainingModel.findByIdAndUpdate(id, {$set: {name: name, description: description, duration: duration, notes: notes}})
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
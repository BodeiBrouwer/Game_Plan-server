const express = require('express');
const router  = express.Router();
let TrainingModel = require('../models/Training.Model')

const { isLoggedIn } = require('../helpers/auth-helper');

router.get('/trainings', isLoggedIn, (req, res) => {
  TrainingModel.find()
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
    TrainingModel.create({name, description, duration, notes})
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
     console.log(req.params.id)
     TrainingModel.findById(req.params.id)
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
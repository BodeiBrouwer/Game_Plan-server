const express = require('express');
const router  = express.Router();
let TrainingModel = require('../models/Training.Model')

/* GET home page */

router.get('/trainings', (req, res) => {
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

router.post('/trainings/create', (req, res) => {
  const {name, description, duration, notes} = req.body;
    console.log(req.body)
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





module.exports = router
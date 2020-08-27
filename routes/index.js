const express = require('express');
const router  = express.Router();
let GameModel = require('../models/Games.Model')
let TrainingModel = require('../models/Training.Model')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


module.exports = router;

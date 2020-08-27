require('dotenv').config();
const mongoose = require('mongoose');
const TrainingModel = require ('../models/Training.Model')

let trainings = [
  {
  name: 'Stuurlui',
  description: 'Finding the game',
  duration: 120,
  notes: 'It went very well',
  creator: "5f48063e219fb6d7a587b184"
  },
  {
  name: 'Ha-BB',
  description: 'Two person scenes',
  duration: 90,
  notes: 'We got good feedback',
  creator: "5f48063e219fb6d7a587b184"
  }
]

function seedTrainings(){
  TrainingModel.create(trainings)
    .then(() => {
      console.log('Trainings are inserted')
      mongoose.connection.close()
            .then(() => {
                console.log('Connection is closed')
            })
    })
    .catch((err) => {
      console.log('wow, that did not go well', err)
    })
}

mongoose
  .connect(`$mongodb://localhost:27017/game-plan`, {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    seedTrainings()
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });
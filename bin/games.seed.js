require('dotenv').config();
// require('../config/db.config')
const mongoose = require('mongoose');
const GamesModel = require ('../models/Games.Model')

let games = [
  {
    category: 'Exercise',
    name: 'Morning gibberish',
    description: 'Practice gibberish by explaining your morning routine in gibberish...',
    purpose: 'Better physicality and gibberish',
    tags: ['Gibberish', 'Solo', 'Monologue']
    },
    {
    category: 'Warm-up',
    name: 'Diamond dance',
    description: 'Follow the leader and dance in sync',
    purpose: 'Bluff',
    tags: ['Bluff', 'Teamwork', 'Physicality']
    },
    {
    category: 'Scenes',
    name: '3-line scenes',
    description: 'Play 2-person, 3-line scenes in which who, what where gets established',
    purpose: 'Endowment',
    tags: ['Endowing', 'Listening']
    }
]

function seedGames(){
  GamesModel.create(games)
    .then(() => {
      console.log('Games are inserted')
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
    seedGames()
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });
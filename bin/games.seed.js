require('dotenv').config();
require('../config/db.config')
const mongoose = require('mongoose');
const app = require('../app');
const GamesModel = require ('../models/Games.Model')

let games = [
  {
    category: 'Exercise',
    creator: 'Bodei',
    name: 'Morning gibberish',
    description: 'Practice gibberish by explaining your morning routine in gibberish...',
    purpose: 'Better physicality and gibberish',
    tags: ['Gibberish', 'Solo', 'Monologue']
    },
    {
    category: 'Warm-up',
    creator: 'Jelle',
    name: 'Diamond dance',
    description: 'Follow the leader and dance in sync',
    purpose: 'Bluff',
    tags: ['Bluff', 'Teamwork', 'Physicality']
    },
    {
    category: 'Scenes',
    creator: 'Latara',
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
  .connect(`${MONGODB_URI}`, {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    seedGames()
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });
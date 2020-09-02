const mongoose = require('mongoose');

let configOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true 
}

let MONGODB_URI = process.env.MONGODB_URI|| 'mongodb://localhost:27017/game-plan'
console.log(MONGODB_URI)
mongoose.connect(MONGODB_URI, configOptions)
    .then(() => {
        console.log('Yayyy Database is connected');
    })
    .catch((err) => {
        console.log('Something went wrong!', err);
    })
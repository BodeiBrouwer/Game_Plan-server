const { Schema, model } = require('mongoose');

const gameSchema = new Schema({
    creator: {
      type: ObjectId,
      required: true
    },
    name: {
      type: String,
      required: true, 
    },
    Description: {
      type: String, 
      required: true,
    },
    purpose: {
      type: String,
      required: true
    },
    credit: String,
    video: String, 
    tags: Array
  }
);

 module.exports = model('Game', gameSchema);
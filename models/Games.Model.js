const { Schema, model } = require('mongoose');

const gameSchema = new Schema({
  category: {
    type: String,
    required: true
  },
    creator: {
      type: ObjectId,
      required: true
    },
    name: {
      type: String,
      required: true, 
    },
    description: {
      type: String, 
      required: true,
    },
    purpose: {
      type: String,
    },
    credit: String,
    video: String, 
    tags: Array
  }
);

 module.exports = model('Game', gameSchema);
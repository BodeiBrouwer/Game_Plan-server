const { Schema, model } = require('mongoose');

const gameSchema = new Schema({
  category: {
    type: String,
    required: true
  },
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User"
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
    tags: Array,
    likes: [{
      type: Schema.Types.ObjectId,
      ref: "User"
    }]
});

 module.exports = model('Game', gameSchema);
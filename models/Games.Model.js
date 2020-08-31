const { Schema, model } = require('mongoose');

const gameSchema = new Schema({
  category: {
    type: String,
    required: true
  },
    creator: Schema.Types.ObjectId,
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
    likes: [Schema.Types.ObjectId]
});

 module.exports = model('Game', gameSchema);
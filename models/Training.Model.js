const { Schema, model } = require('mongoose');

const trainingSchema = new Schema({
    creator: {
      type: Schema.Types.ObjectId,
      required: true,
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
    duration: Number,
    notes: String,
    games: [{
        type: Schema.Types.ObjectId,
        ref: "Game"
      }] 
  }
);

 module.exports = model('Training', trainingSchema);
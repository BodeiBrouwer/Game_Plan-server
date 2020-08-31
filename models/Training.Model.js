const { Schema, model } = require('mongoose');

const trainingSchema = new Schema({
    creator: {
      type: Schema.Types.ObjectId,
      required: true
    },
    name: {
      type: String,
      required: true, 
    },
    duration: Number,
    notes: String,
    games: [Schema.Types.ObjectId] 
  }
);

 module.exports = model('Training', trainingSchema);
const mongoose = require('mongoose');

const tankSchema = new mongoose.Schema({
  tankname: {
    type: String,
    required: true
  },
  crew: {
    type: Number,
    required: true
  },
  velocity: {
    type: Number,
    required: true
  },
  horsepower: {
    type: Number,
    required: true
  },
  tankId: {
    type: Number,
  }
});

const Tank = mongoose.model('Tank', tankSchema);

module.exports = Tank;

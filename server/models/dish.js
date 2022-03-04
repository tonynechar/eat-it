const mongoose = require('./index');
const { Schema } = mongoose;

const dishSchema = new Schema({
  dishName: {
    type: String,
    required: true,
  },
  dishImage: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  availability: {
    type: Boolean,
    default: true,
    required: true,
  },
});

// Only exporting schema, modeling happens in restaurant.js

module.exports = dishSchema;
const mongoose = require('./index');
const { Schema } = mongoose;

// Importing subschema
const Dish = require('./dish');

const orderSchema = new Schema({
  customerName: {
    type: String,
    required: true,
  },
  customerLastName: {
    type: String,
    required: true,
  },
  customerGeolocation: {
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
  },
  creationDate: {
    type: Date,
    default: Date.now(),
  },
  restaurantName: {
    type: String,
    required: true,
  },
  // restaurantId: {
  //   type: ID,
  //   required: true,
  // },
  items: {
    type: [
      {
        dish: {
          type: Dish,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          default: 1,
        }
      }
    ],
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
});

const Order = mongoose.model('Order', restaurantSchema);

module.exports = Order;
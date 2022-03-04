const mongoose = require('./index');
const { Schema } = mongoose;

// Importing subschema
const MenuCategory = require('./menuCategory');

const restaurantSchema = new Schema({
  restaurantName: {
    type: String,
    required: true,
  },
  restaurantImage: {
    type: String,
    required: true,
  },
  categories: {
    type: [String],
    enum: ['Pizza 🍕', 'Pasta 🍝', 'Burgers 🍔', 'Fast Food 🍟', 'Healthy 🥗', 'Sushi 🍣', 'Seafood 🐟'],
    required: true,
  },
  menu: [
    {
      type: [MenuCategory],
      required: true,
    }
  ],
  address: {
    street: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
    postalCode: {
      type: Number,
      required: true,
    },
  },
  geolocation: {
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
  },
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
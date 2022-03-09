const { add } = require('../models/dish');
const restaurantModel = require('../models/restaurant');

const getRestaurants = async (req, res) => {
  try {
    const restaurants = await restaurantModel.find();
    res.status(200)
    res.send(restaurants);
  } catch (err) {
    res.status(500).send(err);
  }
}

const getOneRestaurant = async (req, res) => {
  try {
    const restaurantId = req.params.id;
    const restaurant = await restaurantModel.findOne({ _id: restaurantId });
    res.status(200);
    res.send(restaurant);
  } catch (err) {
    res.status(404).send(err);
  }
}

const createRestaurant = async (req, res) => {
  try {
    const newRestaurant = req.body;
    const addedRestaurant = await restaurantModel.create(newRestaurant);
    res.status(201);
    res.send(addedRestaurant);
  } catch (err) {
    res.status(500).send(err);
  }
}

const createOrder = async (req, res) => {
  try {
    //
  } catch (err) {
    res.status(500).send(err);
  }
}

module.exports = { getRestaurants, getOneRestaurant, createRestaurant, createOrder };
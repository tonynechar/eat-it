const restaurantModel = require('../models/restaurant');
const mockData = require('../demo-db.json');

const getRestaurants = async (req, res) => {
  // START PRODUCTION MODE

  // try {
  //   const restaurants = await restaurantModel.find();
  //   res.status(200)
  //   res.send(restaurants);
  // } catch (err) {
  //   res.status(500).send(err);
  // }

  // END PRODUCTION MODE

  //-------------------

  // START DEMO MODE

  try {
    res.status(200);
    res.send(mockData);
  } catch (err) {
    res.status(500).send(err);
  }

  // END DEMO MODE
}

const getOneRestaurant = async (req, res) => {
  // START PRODUCTION MODE

  // try {
  //   const restaurantId = req.params.id;
  //   const restaurant = await restaurantModel.findOne({ _id: restaurantId });
  //   res.status(200);
  //   res.send(restaurant);
  // } catch (err) {
  //   res.status(404).send(err);
  // }

  // END PRODUCTION MODE

  //-------------------

  // START DEMO MODE

  try {
    const restaurantId = req.params.id;
    for (let i = 0; i < mockData.length; i++) {
      if (mockData[i]._id === restaurantId) {
        res.status(200);
        res.send(mockData[i]);
      }
    }
  } catch (err) {
    res.status(500).send(err);
  }

  // END DEMO MODE
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
    const urlEncodedOrder = `https://wa.me/529995479695/?text=You%20are%20in%20demo%20mode`;
    res.status(201);
    res.json(urlEncodedOrder);
  } catch (err) {
    res.status(500).send(err);
  }
}

module.exports = { getRestaurants, getOneRestaurant, createRestaurant, createOrder };
const { Router } = require('express');
const restaurantController = require('./controllers/restaurant');

// Router Instance
const router = new Router();

router.get('/restaurants', restaurantController.getRestaurants);

router.post('/restaurants', restaurantController.createRestaurant);

// router.get('/restaurant/?restaurantName')

// router.get('/restaurants/categories', )

// router.get('/restaurants/categories/', )


module.exports = router;

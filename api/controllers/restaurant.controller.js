const restaurantService = require('../services/restaurantService')

module.exports = {

  post: (req, res) => {
    console.log('llego el post')
    if (restaurantService.addNewRestaurant(req.body)) {
      res.status(201).send('Restaurante Añadido')
    } else {
      res.status(400).send('Ya existe un restaurante con ese nombre')
    }
  },

  getAllRestaurants: (req, res) => {
    const filter = req.query.kindOfRestaurant
    const allRestaurants = restaurantService.getAllRestaurants(filter)
    res.status(200).send(allRestaurants)
  },

  getByName: (req, res) => {
    const restaurant = restaurantService.getRestaurantByName(req.params.restaurantName)
    res.status(200).send(restaurant)
  }


}

const { Router } = require('express')
const restaurantController = require('./controllers/restaurant.controller')

const api = Router()

api.post('/restaurants', restaurantController.post)
api.get('/restaurants/:restaurantName', restaurantController.getByName)
api.get('/restaurants/', restaurantController.getAllRestaurants)

module.exports = api

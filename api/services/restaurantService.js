const NodeCache = require('node-cache')

const myCache = new NodeCache()

module.exports = {
  addNewRestaurant: (restaurant) => {
    console.dir(restaurant)
    if (!myCache.has(restaurant.name)) {
      return myCache.set(restaurant.name, restaurant)
    }
    return false
  },
  getAllRestaurants: (filterByKind) => {
    const result = []
    myCache.keys().forEach((key) => {
      const currentRestaurant = myCache.get(key)
      /* no muy escalable (si tuviera base de datos, sería parte de la query,
      no tiene sentido traerse todos los resta e iterarlos) */
      if ((filterByKind && currentRestaurant.kindOfRestaurant === filterByKind) || !filterByKind) {
        result.push(currentRestaurant)
      }
    })
    return result
  },
  getRestaurantByName: (name) => {
    console.dir(name)
    if (myCache.has(name)) {
      return myCache.get(name)
    }
  }


}

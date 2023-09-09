const controllers = require('../controller/index.js')
const router = require('express').Router()

router.get('/get', controllers.getCar)
router.post('/purchase', controllers.createCar)
router.get('/query', controllers.updatedCar)

module.exports = router

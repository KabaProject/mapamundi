const express = require('express')
const router = express.Router()
const controller = require('../controllers/map')
const MapController = new controller()
//  ROUTING
router
    .get('/:country', MapController.country)
    .get('/:country/:state', MapController.state)

module.exports = router
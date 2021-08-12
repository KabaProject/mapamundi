const express = require('express')
const router = express.Router()

//  ROUTING
router
    .get('/:country')
    .get('/:country/:state')

module.exports = router
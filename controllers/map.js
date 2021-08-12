//  IMPORTS
const model = require('../models/map')
const MapModel = new model()
class MapController{
    country (req, res) {
        const {country} = req.params
        const data = MapModel.states(country)
        if(!data){
            return res.status(400).json({
                sucess: false,
                msg: `The country ${country} doesn't exists`
            })
        }
        return res.status(200).json({
            success: true,
            data
        })
    }

    state (req, res) {
        const {country, state} = req.params
        const data = MapModel.cities(country, state)
        if(!data){
            return res.status(400).json({
                sucess: false,
                msg: `The country ${country} or the state ${state} doesn't exists`
            })
        }
        return res.status(200).json({
            success: true,
            data
        })
    }
}

module.exports = MapController
//  IMPORTS
const MapModel = require('../models/map')

class MapController{
    get country (req, res) {
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

    get state (req, res) {
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
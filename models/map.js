const data = require('../records/world')

class MapModel{
    constructor(){
        this.data = data
    }
    states (country) {
        const key = country.toLowerCase()
        return this.data[key]
    }
    cities (country, state) {
        const states = this.states(country)
        const key = state.toLowerCase()
        return states[key]
    }
}

module.exports = MapModel
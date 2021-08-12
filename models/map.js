const data = require('../records/world')

class Map{
    constructor(){
        this.data = data
    }
    get states (country) {
        const key = country.toLowerCase()
        return this.data[key]
    }
    get cities (country, state) {
        const states = this.states(country)
        const key = state.toLowerCase()
        return states[key]
    }
}

module.exports = Map()
const data = require('../records/world')

class MapModel{
    constructor(){
        this.data = data
    }
    states (country) {
        const key = country.toLowerCase()
        const states = []
        for (const state in this.data[key].states){
            states.push(this.data[key].states[state].name)
        }
        if(states.length < 1) return undefined
        return states
    }
    cities (country, state) {
        const keyCountry = country.toLowerCase()
        const keyState = state.toLowerCase()
        const stateData = this.data[keyCountry].states[keyState]
        return stateData
    }
}

module.exports = MapModel
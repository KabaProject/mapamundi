// NODE & NPM IMPORTS
const express = require('express')
const app = express()
const morgan = require('morgan')

// LOCAL IMPORTS
const mapRouter = require('./routes/map')

// MIDDLEWARES
app
    .use(express.urlencoded({extended: false}))

// ROUTING
app
    .use('/api/v1', mapRouter)

// LISTEN
app.listen(8000, () => {
    console.log('Server running on port 8000...')
})
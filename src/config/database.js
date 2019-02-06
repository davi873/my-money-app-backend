const mongoose = require('mongoose')
mongoose.Promise = global.Promise 

const nameDb = 'mymoney'

module.exports = mongoose.connect(`mongodb://localhost/${nameDb}`)
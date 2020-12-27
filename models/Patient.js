const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PatientSchema = new Schema({
    name: String,
    age: Number
})

module.exports = Patient = mongoose.model('patient', PatientSchema)
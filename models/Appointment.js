const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AppointmentSchema = new Schema({
    doctor: String,
    patient: String,
    time: String,
    date: Date
})

module.exports = Appointment = mongoose.model('appointment', AppointmentSchema)
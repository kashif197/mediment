const express = require("express");
const router = express.Router();

// Import Models
const Doctor = require('../models/Doctor')
const Patient = require('../models/Patient')

// Adding Doctors
router.post('/AddDoctor', (req, res) => {
    const newDoctor = new Doctor({
        name: req.body.name,
        specialization: req.body.specialization
    })
    newDoctor.save()
        .then((doctor) => res.json(doctor))
        .catch((err) => res.json(err))
})

// Adding Patients
router.post('/AddPatient', (req, res) => {
    const newPatient = new Patient({
        name: req.body.name,
        age: req.body.age
    })
    newPatient.save()
        .then((patient) => res.json(patient))
        .catch((err) => res.json(err))
})


module.exports = router
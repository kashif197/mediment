// Import Dependencies
const express = require('express')
const mongoose = require('mongoose')

// Initialize App
const app = express()

// Add Routes
const routes = require('./routes/appRoutes')

// Body Parser
app.use(express.json()) 

// Connect Database
const db = require('./config/keys').mongoURI

mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .then(() => console.log('Successfully Connected'))
    .catch((err) => console.log(err))

// Using Routes
app.use('/', routes)

// Launch Server
const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server Running On Port ${PORT}`))
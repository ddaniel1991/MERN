const express = require('express')
const mongoose = require('mongoose')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT;

connectDB()

const app = express();



app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api/dishes", require('./routes/dishRoutes'))
app.use("/api/drinks", require('./routes/drinkRoutes'))
app.use("/api/users", require('./routes/userRoutes'))



app.use(errorHandler)




app.listen(port, () => console.log(`Server started on port ${port}`))
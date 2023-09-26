import express from 'express'
import sequelize from './connection.js'

const app = express()
const port = process.env.PORT || 3000

// Function to run the server and connect to the database
const runServer = async () => {
  await sequelize.authenticate()
  // await sequelize.sync({ force: true })
  app.listen(port, () => console.log(`Server running on port ${port}`))
}

runServer()

import express from 'express'
import sequelize from './connection.js'
import morgan from 'morgan'
import helmet from 'helmet'
import usersRouter from './routes/users/users.routes.js'

const app = express()
const port = process.env.PORT || 3000

// middlewares configuration
app.use(express.json()) // to support JSON-encoded bodies
app.use(morgan('dev')) // http request logger middleware
app.use(helmet()) // helps to secure Express apps by setting various HTTP headers

// routes configuration
app.use('/api/users', usersRouter)

// Function to run the server and connect to the database
const runServer = async () => {
  await sequelize.authenticate()
  // await sequelize.sync({ force: true })
  app.listen(port, () => console.log(`Server running on port ${port}`))
}

runServer()

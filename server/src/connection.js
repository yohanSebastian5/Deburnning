import { config } from 'dotenv'
import { Sequelize } from 'sequelize'

// Load environment variables for the whole app
config()

// Create a new instance of Sequelize with the database configuration
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'mysql'
  }
)

export default sequelize

import sequelize from '../connection.js'
import { DataTypes } from 'sequelize'

const User = sequelize.define('User', {
  userId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  names: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastnames: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

export default User

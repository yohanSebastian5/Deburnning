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
    unique: true,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { timestamps: false })

export default User

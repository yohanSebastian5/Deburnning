import sequelize from '../connection.js'
import { DataTypes } from 'sequelize'

const GoalStatus = sequelize.define('GoalStatus', {
  statusId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  statusDescription: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { tableName: 'GoalStatus' })

export default GoalStatus

import sequelize from '../connection.js'
import { DataTypes } from 'sequelize'
import { GOAL_STATUSES } from '../consts.js'

const GoalStatus = sequelize.define('GoalStatus', {
  statusId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  statusDescription: {
    type: DataTypes.ENUM(GOAL_STATUSES.achived, GOAL_STATUSES.goal),
    allowNull: false,
    defaultValue: GOAL_STATUSES.goal
  }
}, { tableName: 'GoalStatuses' })

export default GoalStatus

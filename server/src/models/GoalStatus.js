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
    type: DataTypes.ENUM(GOAL_STATUSES.achived.toString(), GOAL_STATUSES.goal.toString()),
    allowNull: false
  }
})

export default GoalStatus

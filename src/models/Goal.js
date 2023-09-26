import sequelize from '../connection.js'
import { DataTypes } from 'sequelize'
import GoalStatus from './GoalStatus.js'
import Category from './Category.js'
import User from './User.js'

const Goal = sequelize.define('Goal', {
  goalId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  goalTitle: {
    type: DataTypes.STRING,
    allowNull: false
  },
  goalDescription: {
    type: DataTypes.STRING,
    defaultValue: 'Sin descripción'
  },
  deadline: {
    type: DataTypes.DATE,
    allowNull: false
  },
  completmentDate: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  timestamps: {
    createdAt: 'startDate',
    updatedAt: false
  }
})

Goal.belongsTo(GoalStatus, { foreignKey: 'statusId' })
Goal.belongsTo(Category, { foreignKey: 'categoryId' })
Goal.belongsTo(User, { foreignKey: 'userId' })

export default Goal

import sequelize from '../connection.js'
import { DataTypes } from 'sequelize'
import User from './User.js'

const Category = sequelize.define('Category', {
  categoryId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  categoryName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  categoryDescription: { type: DataTypes.STRING, defaultValue: 'Categoria sin descripción' }
}, { timestamps: false })

Category.belongsTo(User, { foreignKey: 'userId' })

export default Category

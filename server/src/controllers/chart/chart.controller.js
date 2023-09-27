import { GOAL_STATUSES } from '../../consts.js'
import { manageError } from '../../utils.js'
import { Op } from 'sequelize'; // Importa el operador Sequelize para usar en la condición WHERE
import Goal from '../../models/Goal.js'
import sequelize from '../../connection.js'
import Category from '../../models/Category.js';

export default class ChartController {
  // method to get th count og goals by category with goalStatusIs = to GOAL_STATUS.achived
  getGoalsCountByCategory = async (req, res) => {
    try {
      // get the count of goals by category with goalStatusId = to GOAL_STATUS.achived
      const goalsCountByCategory = await Goal.findAll({
        attributes: [
          [sequelize.fn('COUNT', sequelize.col('Goal.categoryId')), 'goalCount'],
          [sequelize.col('Category.categoryName'), 'categoryName']
        ],
        include: {
          model: Category,
          attributes: []
        },
        where: {
          goalStatusId: 2,
        },
        group: ["Goal.categoryId"],
      });

      return res.status(200).json(goalsCountByCategory)
    } catch (error) {
      manageError(error, res)
    }
  }
}

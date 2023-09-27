import sequelize from '../../connection.js'
import { GOAL_STATUSES } from '../../consts.js'
import Goal from '../../models/Goal.js'
import { manageError } from '../../utils.js'

export default class ChartController {
  // method to get th count og goals by category with goalStatusIs = to GOAL_STATUS.achived
  getGoalsCountByCategory = async (req, res) => {
    try {
      // get the count of goals by category with goalStatusId = to GOAL_STATUS.achived
      const goalsCountByCategory = await Goal.findAll({
        attributes: [
          'categoryId',
          [sequelize.fn('COUNT', sequelize.col('categoryId')), 'count']
        ],
        where: {
          goalStatusId: GOAL_STATUSES.achived
        },
        group: ['categoryId']
      })

      return res.status(200).json(goalsCountByCategory)
    } catch (error) {
      manageError(error, res)
    }
  }
}

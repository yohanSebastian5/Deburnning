import Goal from '../../models/Goal'
import { manageError } from '../../utils'

export default class GoalController {
  createGoal = async (req, res) => {
    const { goalTitle, goalDescription, deadline, categoryId, userId } = req.body

    // validate data from request
    if (!goalTitle || !deadline || !categoryId || !userId) {
      return res.status(400).json({ message: 'Faltan datos' })
    }

    try {
      // create goal
      const goal = await Goal.create({
        goalTitle,
        goalDescription,
        deadline,
        categoryId,
        userId
      })

      return res.status(201).json(goal)
    } catch (error) {
      manageError(res, error)
    }
  }
}

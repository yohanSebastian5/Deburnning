import Goal from '../../models/Goal.js'
import { manageError } from '../../utils.js'

export default class GoalController {
  createGoal = async (req, res) => {
    const { goalTitle, goalDescription, deadline, categoryId } = req.body
    const { userId } = req.user
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

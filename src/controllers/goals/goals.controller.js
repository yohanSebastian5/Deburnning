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

  updateGoal = async (req, res) => {
    const { goalId } = req.params
    const { goalTitle, goalDescription, deadline, categoryId } = req.body
    const { userId } = req.user

    // validate data from request
    if (!goalId || !goalTitle || !deadline || !categoryId || !userId) {
      return res.status(400).json({ message: 'Faltan datos' })
    }

    try {
      // update goal with de given id
      const goal = await Goal.update({
        goalTitle,
        goalDescription,
        deadline,
        categoryId,
        userId
      }, {
        where: { goalId }
      })

      return res.status(200).json(goal)
    } catch (error) {
      manageError(res, error)
    }
  }

  getGoals = async (req, res) => {
    const { userId } = req.user

    try {
      // get all goals from the given user
      const goals = await Goal.findAll({
        where: { userId }
      })

      return res.status(200).json(goals)
    } catch (error) {
      manageError(res, error)
    }
  }

  getGoalById = async (req, res) => {
    const { goalId } = req.params
    const { userId } = req.user

    // validate data from request
    if (!goalId || !userId) {
      return res.status(400).json({ message: 'Faltan datos' })
    }

    try {
      // get goal with the given id
      const goal = await Goal.findOne({
        where: { goalId, userId }
      })

      return res.status(200).json(goal)
    } catch (error) {
      manageError(res, error)
    }
  }
}

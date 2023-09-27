import { GOAL_STATUSES } from '../../consts.js'
import Goal from '../../models/Goal.js'
import { manageError } from '../../utils.js'

export default class GoalController {
  createGoal = async (req, res) => {
    const { goalTitle, goalDescription, deadline, categoryId, goalState } = req.body
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
        userId,
        goalStatusId: goalState ? GOAL_STATUSES.goal : GOAL_STATUSES.achived
      })

      return res.status(201).json(goal)
    } catch (error) {
      manageError(error, res)
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

    const goal = await Goal.findOne({ where: { goalId, userId } })

    // if the requested goal is not found return 404 error
    if (!goal) return res.status(404).json({ message: 'Logro no encontrado' })

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
      manageError(error, res)
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
      manageError(error, res)
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
      manageError(error, res)
    }
  }

  deleteGoal = async (req, res) => {
    const { goalId } = req.params
    const { userId } = req.user

    // validate data from request
    if (!goalId || !userId) {
      return res.status(400).json({ message: 'Faltan datos' })
    }

    try {
      // delete goal with the given id
      await Goal.destroy({
        where: { goalId, userId }
      })

      return res.status(200).json({ message: 'Meta eliminada' })
    } catch (error) {
      manageError(error, res)
    }
  }

  changeGoalStatus = async (req, res) => {
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

      // if the requested goal is not found return 404 error
      if (!goal) return res.status(404).json({ message: 'Logro no encontrado' })

      console.log(goal)

      // eslint-disable-next-line eqeqeq
      const newGoalStatus = goal.goalStatusId == GOAL_STATUSES.achived ? GOAL_STATUSES.goal : GOAL_STATUSES.achived
      // change goal status
      goal.goalStatusId = newGoalStatus
      await goal.save()

      return res.status(200).json(goal)
    } catch (error) {
      manageError(error, res)
    }
  }
}

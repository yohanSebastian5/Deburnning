import { Router } from 'express'
import GoalController from '../../controllers/goals/goals.controller.js'

const goalController = new GoalController()
const goalsRouter = Router()

goalsRouter.post('/createGoal', goalController.createGoal)

export default goalsRouter

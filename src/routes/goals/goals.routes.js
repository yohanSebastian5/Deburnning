import { Router } from 'express'
import GoalController from '../../controllers/goals/goals.controller.js'

const goalController = new GoalController()
const goalsRouter = Router()

// route for creating a goal
goalsRouter.post('/createGoal', goalController.createGoal)

// route for updating a goal
goalsRouter.put('/updateGoal/:goalId', goalController.updateGoal)

// route for getting all goals from a user
goalsRouter.get('/getGoals', goalController.getGoals)

// route for getting a goal by id
goalsRouter.get('/getGoal/:goalId', goalController.getGoalById)

// route for deleting a goal by id
goalsRouter.delete('/deleteGoal/:goalId', goalController.deleteGoal)

export default goalsRouter

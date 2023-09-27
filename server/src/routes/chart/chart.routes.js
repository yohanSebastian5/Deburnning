import { Router } from 'express'
import ChartController from '../../controllers/chart/chart.controller.js'

const chartRouter = Router()
const ObjChartController = new ChartController()

chartRouter.get('/categoryChartData', ObjChartController.getGoalsCountByCategory)
export default chartRouter

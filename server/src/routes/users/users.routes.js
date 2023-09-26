import { Router } from 'express'
import Users from '../../controllers/users/users.controller.js'

const objUsers = new Users()
const usersRouter = Router()

// route for user registering
usersRouter.post('/register', objUsers.register)
// route for user login
usersRouter.post('/login', objUsers.login)

export default usersRouter

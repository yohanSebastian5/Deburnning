import { Router } from 'express'
import CategoriesController from '../../controllers/categories/categories.controller.js'

const objCategories = new CategoriesController()

const categoriesRouter = Router()

// route for creating a new category
categoriesRouter.post('/createCategory', objCategories.createCategory)

// route for deleting a category
categoriesRouter.delete('/deleteCategory/:categoryId', objCategories.deleteCategory)

// route for editing a category
categoriesRouter.put('/editCategory/:categoryId', objCategories.editCategory)

// route for selecting all categories
categoriesRouter.get('/selectCategories', objCategories.selectCategories)

// route for selecting a category by id
categoriesRouter.get('/selectCategory/:categoryId', objCategories.selectCategoryById)

// route for selecting categories with associated goals
categoriesRouter.get('/selectCategoryWithGoals/:categoryId', objCategories.selectCategoryWithGoals)

export default categoriesRouter

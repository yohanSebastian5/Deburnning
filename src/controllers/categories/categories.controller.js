import Category from '../../models/Category.js'
import { manageError } from '../../utils.js'

export default class CategoriesController {
  createCategory = async (req, res) => {
    const { categoryName, categoryDescription } = req.body
    const { userId } = req.user

    if (!categoryName) {
      return res
        .status(400)
        .json({ message: 'Campos faltanes, por favor verificar' })
    }

    try {
      const newCategory = await Category.create({
        categoryName,
        categoryDescription,
        userId
      })
      res.status(200).json({ newCategory })
    } catch (error) {
      manageError(error, res)
    }
  }

  deleteCategory = async (req, res) => {
    const { categoryId } = req.params

    try {
      const deletedCategory = await Category.destroy({
        where: { categoryId }
      })
      res.status(200).json({ deletedCategory })
    } catch (error) {
      manageError(error, res)
    }
  }

  editCategory = async (req, res) => {
    const { categoryId } = req.params
    const { categoryName, categoryDescription } = req.body

    try {
      const editedCategory = await Category.update(
        { categoryName, categoryDescription },
        { where: { categoryId } }
      )
      res.status(200).json({ editedCategory })
    } catch (error) {
      manageError(error, res)
    }
  }

  selectCategories = async (req, res) => {
    try {
      const categories = await Category.findAll()
      res.status(200).json({ categories })
    } catch (error) {
      manageError(error, res)
    }
  }

  selectCategoryById = async (req, res) => {
    const { categoryId } = req.params

    try {
      const category = await Category.findOne({
        where: { categoryId }
      })
      res.status(200).json({ category })
    } catch (error) {
      manageError(error, res)
    }
  }
}

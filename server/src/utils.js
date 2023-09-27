export const manageError = (error, res) => {
  console.error(error)
  return res.status(500).json({ message: 'Error en el servidor' })
}

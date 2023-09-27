export const manageError = (res, error) => {
  console.error(error)
  return res.status(500).json({ message: 'Error en el servidor' })
}

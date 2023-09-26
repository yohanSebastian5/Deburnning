export function manejoError (error, res) {
  console.error(error)
  res.status(500).json({
    message: 'Error en el servidor'
  })
}

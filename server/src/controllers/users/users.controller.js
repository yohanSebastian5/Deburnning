import User from '../../models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export default class Users {
  #encryptPassword = async password => {
    // generate salt for password encrypting
    const salt = await bcrypt.genSalt(10)
    // return the encrypted password
    return await bcrypt.hash(password, salt)
  }

  #decryptPassword = async (password, hash) => await bcrypt.compare(password, hash)

  // method to verify that password is minimum 8 characters long, contains at least one number, one lowercase, one uppercase and one special character
  #verifyPassword = password => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    return regex.test(password)
  }

  register = async (req, res) => {
    // if no req.body is sent error 400 is sent
    if (!req.body) return res.status(400).json({ message: 'Empty body' })

    const { names, lastnames, email, password } = req.body

    // if some data is empty returns 400
    if (!names || !lastnames || !email || !password) return res.status(400).json({ message: 'Missing fields' })

    // searches for user with the same email and if it exists returns 400
    const user = await User.findOne({ where: { email } })
    if (user) return res.status(400).json({ message: 'El usuario ya existe' })

    // validates if password format is correct
    const passwordVerified = this.#verifyPassword(password)
    if (!passwordVerified) return res.status(400).json({ message: 'La contraseña debe tener mínimo 8 caracteres, contener al menos un número, una minúscula, una mayúscula y un caracter especial' })

    try {
      // create new user
      const newUser = await User.create({
        names,
        lastnames,
        email,
        password: await this.#encryptPassword(password)
      })
      res.status(200).json(newUser)
    } catch (error) {
      console.error(error)
      res.status(500).json({ messgae: 'Internal server error' })
    }
  }

  login = async (req, res) => {
    const { username, password } = req.body

    const user = await User.findOne({ where: { email: username } })

    // if user is not found returns 404
    if (!user) return res.status(404).json({ message: 'User not found' })

    // decrypt password
    const decrypted = await this.#decryptPassword(password, user.password)

    // if password is wrong returns 401
    if (!decrypted) return res.status(401).json({ message: 'Wrong password' })

    // creation of jwt for authorization
    const authorization = jwt.sign({
      id: user.id,
      name: user.name,
      lastname: user.lastname,
      email: user.email
    }, process.env.JWT_SECRET || 'secret', {
      expiresIn: '8h',
      algorithm: 'HS256'
    })

    return res.status(200).json(authorization)
  }
}

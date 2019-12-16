import { validationResult } from 'express-validator'
import bcrypt from 'bcrypt'
module.exports = {
  validate(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() })
    }
  },
  checkPass(password, userPassword) {
    bcrypt.compare(password, userPassword, (err, isMatched) => {
      if (err) throw err
      if (isMatched) {
        return true
      } else {
        return false
      }
    })
  }
}

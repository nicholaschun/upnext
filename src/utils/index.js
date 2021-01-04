import crypto from 'crypto'
import bcrypt from 'bcryptjs'
import uuid from 'uuid'

export const genToken = val => {
  return crypto
    .createHash('sha256')
    .update(val)
    .digest('hex')
}

export const encryptPass = password => bcrypt.hashSync(password, 10)

export const genuuid = () => uuid()

export const generateEventLink = snippet => {
  const lower = snippet.toLowerCase()
  return lower.split(' ').join('-')
}

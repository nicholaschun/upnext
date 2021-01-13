import crypto from 'crypto'
import bcrypt from 'bcryptjs'
import uuid from 'uuid'
import fs from 'fs'
import path from 'path'

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

export const comparePassword = async (password, dbPass) => {
  return await bcrypt.compare(password, dbPass)
}

export const respondWithData = (result, res) => {
  const { data, statusCode } = result
  return res.status(statusCode).json(data)
}

export const clearTempFolder = async () => {
  const dir = `${process.cwd()}/temp`
  fs.readdir(dir, (err, files) => {
    if (err) throw err
    for (const file of files) {
      fs.unlink(path.join(dir, file), err => {
        if (err) throw err
      })
    }
  })
}

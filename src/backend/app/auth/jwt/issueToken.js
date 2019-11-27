import jwt from 'jsonwebtoken'
import fs from 'fs'
import path from 'path'

let i = 'upnext'
let s = 'admin@up-next.co'
let a = 'up-next.co/apps'
let expire = '365d'
const publicKey = fs
  .readFileSync(path.resolve(__dirname, 'keys/public.key'))
  .toString('utf8')
const privateKey = fs
  .readFileSync(path.resolve(__dirname, 'keys/private.key'))
  .toString('utf8')
module.exports = {
  issueToken(body) {
    const payload = {
      data: body,
      expiresIn: expire
    }
    const signOptions = {
      issuer: i,
      subject: s,
      audience: a,
      expiresIn: expire
    }
    const token = jwt.sign({ user: payload }, privateKey, signOptions)
    return token
  },
  generateRefreshToken(body) {}
}

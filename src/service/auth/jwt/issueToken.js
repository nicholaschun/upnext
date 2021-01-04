import jwt from 'jsonwebtoken'
import fs from 'fs'
import path from 'path'

import config from './../../../../config'

const {
  auth: { jwtIssuer, jwtAudience, jwtExpiresIn, jwtSubject }
} = config
const privateKey = fs
  .readFileSync(path.resolve('./config/keys/private.key'))
  .toString('utf8')

export default {
  issueToken(body) {
    const payload = {
      data: body,
      expiresIn: jwtExpiresIn
    }
    const signOptions = {
      issuer: jwtIssuer,
      subject: jwtSubject,
      audience: jwtAudience,
      expiresIn: jwtExpiresIn
    }
    const token = jwt.sign({ user: payload }, privateKey, signOptions)
    return token
  },
  generateRefreshToken(body) {
    // TODO
  }
}

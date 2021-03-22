import jwt from 'jsonwebtoken'

import config from '../../../config'

const {
  auth: { jwtIssuer, jwtAudience, jwtExpiresIn, jwtSubject, privateKey }
} = config

export const issueToken = body => {
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
}

export const generateRefreshToken = body => {
  // TODO
}

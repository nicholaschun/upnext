import { OAuth2Client } from 'google-auth-library'
import dotenv from 'dotenv'

dotenv.config()

const client = new OAuth2Client(process.env.google_client_id)

module.exports = {
  async verifyIdToken(idToken) {
    const ticket = await client.verifyIdToken({
      idToken,
      audience: process.env.google_client_id
    })
    const payload = ticket.getPayload()
    return payload
  }
}

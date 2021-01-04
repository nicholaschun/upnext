export default {
  s3: {
    secretKey: process.env.S3_SECRET_KEY,
    accessKey: process.env.S3_ACCESS_KEY,
    region: process.env.S3_BUCKET_REGION,
    bucket: process.env.S3_BUCKET_NAME
  },
  google: {
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callback: process.env.GOOGLE_CALLBACK
  },
  facebook: {
    clientId: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callback: process.env.FACEBOOK_CALLBACK
  },
  auth: {
    sessionSecret: process.env.SESSION_SECRET,
    sessionKey: process.env.SESSION_KEY,
    jwtIssuer: process.env.JWT_ISSUER,
    jwtAudience: process.env.JWT_AUDIENCE,
    jwtExpiresIn: process.env.JWT_EXPIRES_IN,
    jwtSubject: process.env.JWT_SUBJECT
  },
  baseUrl: process.env.BASE_URL,
  port: process.env.PORT,
  env: process.env.ENV,
  host: process.env.HOSTNAME,
  db: {
    development: {
      username: 'root',
      password: null,
      database: 'upnext_db',
      host: '127.0.0.1',
      dialect: 'mysql'
    },
    production: {
      username: process.env.RDS_USERNAME,
      password: process.env.RDS_PASSWORD,
      database: process.env.RDS_DB_NAME,
      host: process.env.RDS_HOSTNAME,
      port: process.env.RDS_PORT,
      dialect: 'mysql'
    }
  },
  defaultProfileImage: process.env.DEFAULT_PROFILE_IMAGE
}

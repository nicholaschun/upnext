'use strict'

module.exports = {
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
}

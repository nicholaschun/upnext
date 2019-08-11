import {API_VERSION} from './../../../constants'
const baseUrl = `/${API_VERSION}`
const url = {
    users: `${baseUrl}users`,
    events: `${baseUrl}events`
}

module.exports = url
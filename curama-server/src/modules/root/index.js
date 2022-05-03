const services = require('./root.service')
const {api} = require('./root.config.json')
const moment = require('moment')
const mongoose = require('mongoose')
const log = require('../../libs/logger')

// вынести в helper
function connect(socket, api) {
  // todo вынести сложные обращения к переменным в отдельные переменные
  for (let i = 0; i < Object.keys(api).length; i++) {
    const apiMethodName = Object.keys(api)[i]
    console.log(apiMethodName)
    const methodName = api[apiMethodName].method
    const successStatusMessage = api[apiMethodName].response.success.statusMessage
    socket.on(apiMethodName, async data => {
      
      //
      let collections = Object.keys(mongoose.connections[0].collections)
      console.log(collections)
      //
      
      let res = null
      try {
        const execResult = await services[methodName](data)
        log.info(`${moment().format('DD.MM.YYYY HH:mm:ss')} - [${apiMethodName}] - ${successStatusMessage}`)
        res = {
          ...api[apiMethodName].response.success,
          data: execResult
        }
      } catch (e) {
        log.error(`${moment().format('DD.MM.YYYY HH:mm:ss')} - [${apiMethodName}] - ${e.message}`)
        res = {
          ...api[apiMethodName].response.error,
          // ? check this
          data: services[methodName](data)
        }
      }
      socket.emit(methodName, res)
    })
  }
}

module.exports.connection = (socket) => {
  connect(socket, api)
}

const config = require('./root.config.json')
const moment = require('moment')
const log = require('../../libs/logger')
// todo сделать общий класс класс с параметрами - model, методы - service
const services = require('./root.service')
// todo использовать Component вместо models и services
const Component = require('../../helpers/component')

//
// let collections = Object.keys(mongoose.connections[0].collections)
// console.log(collections)
//

// вынести в helper
function connect(socket, config) {
  for (const key of Object.keys(config)) {
    const component = new Component(key, config[key].schema)
    const api = config[key].api
    for (const apiMethodName of Object.keys(api)) {
      console.log(apiMethodName)
      const methodName = api[apiMethodName].method
      const successStatusMessage = api[apiMethodName].response.success.statusMessage
      socket.on(apiMethodName, async data => {
        let res = null
        try {
          const execResult = await component[methodName](data)
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
            data: component[methodName](data)
          }
        }
        socket.emit(apiMethodName, res)
      })
    }
  }
}

module.exports.connection = async (socket) => {
  connect(socket, config)
}

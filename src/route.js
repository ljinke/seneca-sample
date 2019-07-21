const actions = require('./actions')

module.exports = seneca => {
    Object.keys(actions).forEach(key => {
        seneca.addAsync(`cmd:key`, actions[key])
    })
}
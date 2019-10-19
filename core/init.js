const requireDirectory = require('require-directory')
const Router = require('koa-router')
const path = require('path')
class InitManager {
    static initCore(app) {
        InitManager.app = app
        InitManager.initLoadRouters()
        InitManager.loadConfig()
    }
    static loadConfig(path = '') {
        const configPath = path || process.cwd() + '/config/config.js'
        const config = require(configPath)
        global.config = config
    }
    static initLoadRouters() {
        const apiDIrectory = path.join(process.cwd(), '/app/api')
        requireDirectory(module, apiDIrectory ,{visit: (obj)=>{
            if(obj instanceof Router) {
                InitManager.app.use(obj.routes())
            }
        }})
    }
}

module.exports = InitManager
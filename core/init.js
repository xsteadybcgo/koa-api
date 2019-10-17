const requireDirectory = require('require-directory')
const Router = require('koa-router')
const path = require('path')
class InitManager {
    static initCore(app) {
        InitManager.initLoadRouters(app)
    }
    static initLoadRouters(app) {
        const apiDIrectory = path.join(process.cwd(), '/app/api')
        requireDirectory(module, apiDIrectory ,{visit: (obj)=>{
            if(obj instanceof Router) {
                app.use(obj.routes())
            }
        }})
    }
}

module.exports = InitManager
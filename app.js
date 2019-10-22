const Koa = require('koa')
const InitManager = require('./core/init')
const bodyParser = require('koa-bodyparser')
const catchError = require('./middleware/exception')
const app = new Koa()

app.use(bodyParser())
app.use(catchError)

// 自动注册路由
InitManager.initCore(app)

app.listen(3000)
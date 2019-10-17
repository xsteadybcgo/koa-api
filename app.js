const Koa = require('koa')
const InitManager = require('./core/init')
const bodyParser = require('koa-bodyparser')
const catchError = require('./middleware/exception')
const app = new Koa()

app.use(bodyParser())
app.use(catchError)
InitManager.initCore(app)

app.listen(3000)
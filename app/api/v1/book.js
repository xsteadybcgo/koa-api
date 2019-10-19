const Router = require('koa-router')
const router = new Router()
const { ParameterException } = require('../../../core/http-exception')

router.get('/v1/book/lastest', (ctx, next) => {
    ctx.body = {
        book: 'done'
    }
    if (true) {
        const error =  new ParameterException()
        error.requestUrl = `${ctx.method} ${ctx.path}`
        throw error
    }
    // throw new Error("error")
})

module.exports = router
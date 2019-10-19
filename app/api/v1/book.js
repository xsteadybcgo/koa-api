const Router = require('koa-router')
const router = new Router()
const { ParameterException } = require('../../../core/http-exception')
const {PositiveIntergerValidator} = require('../../validators/validator')

router.get('/v1/:id/book/lastest', (ctx, next) => {
    const v = new PositiveIntergerValidator()
    v.validate(ctx)
    // throw new Error("error")
    // if (true) {
    //     const error =  new ParameterException()
    //     error.requestUrl = `${ctx.method} ${ctx.path}`
    //     throw error
    // }
    // ctx.body = {
    //     book: 'done'
    // }
})

module.exports = router
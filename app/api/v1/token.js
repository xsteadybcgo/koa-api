const Router = require('koa-router')
const { TokenValidator } = require('../../validators/validator')

const router = new Router({
    prefix: '/v1/token'
})

router.post('/', async (ctx) => {
    const v = await new TokenValidator().validate(ctx)
    // switch (v.get('body.type')) {
    //     case value:

    //         break;

    //     default:
    //         break;
    // }
})

module.exports = router
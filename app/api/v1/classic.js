const Router = require('koa-router')
const router = new Router()

router.get('/v1/classic/lastest', (ctx, next) => {
    console.log(ctx.path);
    
    ctx.body = {
        classic: 'done'
    }
})

module.exports = router
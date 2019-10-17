const Router = require('koa-router')
const router = new Router()

router.get('/v1/book/lastest', (ctx, next) => {
    console.log(2222);
    
    ctx.body = {
        book: 'done'
    }
})

module.exports = router
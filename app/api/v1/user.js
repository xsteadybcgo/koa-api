const Router = require('koa-router')
const { RegisterValidator } = require('../../validators/validator')
const {User} = require('../../models/user')
const {Success} = require('../../../core/http-exception')
const router = new Router({
    prefix: '/v1/user'
})


router.post('/register', async(ctx)=>{
    // 接收参数， 使用linvalidator校验
    const v = await new RegisterValidator().validate(ctx)
    const user = {
        email: v.get('body.email'),
        password: v.get('body.password2'),
        nickname: v.get('body.nickname')
    }
    const r = await User.create(user)
    throw new Success()
})

module.exports = router
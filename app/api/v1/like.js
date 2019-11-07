const Router = require("koa-router");
const { Auth } = require('../../../middleware/auth')
const { LikeValidator, } = require('../../validators/validator')
const { Favor } = require('../../models/favor')
const { Success } = require('../../../core/http-exception')
const router = new Router({
  prefix: "/v1/like"
});

router.post('/', new Auth().m, async (ctx) => {
  const v = await new LikeValidator().validate(ctx, {
    id: 'artId'
  });
  await Favor.like(v.get('body.artId'), v.get('body.type'), ctx.auth.uid)
  throw new Success()
})

module.exports = router
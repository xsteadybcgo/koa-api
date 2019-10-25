const Router = require("koa-router");
const { Auth } = require("../../../middleware/auth");
const router = new Router({
  prefix: "/v1/classic"
});

router.get("/lastest", new Auth().m, (ctx, next) => {
  ctx.body = ctx.auth.uid
});

module.exports = router;

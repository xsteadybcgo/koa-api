const Router = require("koa-router");
const { Auth } = require("../../../middleware/auth");
const { Flow } = require("../../models/flow");
const router = new Router({
  prefix: "/v1/classic"
});
const {Art} = require('../../models/art')
const {Favor} = require('../../models/favor')


router.get("/latest",  new Auth().m, async(ctx, next) => {
  const flow = await Flow.findOne({
    order: [["index", "DESC"]]
  }); 
  const art = await Art.getData(flow.artId, flow.type)
  art.setDataValue('index', flow.index)
  const likeStatus = Favor.userLikeIt(flow.artId, flow.type,ctx.auth)
  art.setDataValue('likeStatus',likeStatus)
  ctx.body = art;
});

module.exports = router;

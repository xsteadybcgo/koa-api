const basicAuth = require("basic-auth");
const { Forbidden } = require("../core/http-exception");
const jwt = require('jsonwebtoken')
const securityConfig = require('../config/config').security
class Auth {
  constructor() {
    Auth.USER = 8;
    Auth.ADMIN = 16;
  }

  get m() {
    return async (ctx, next) => {
      // token 检测 根据传递的形式 header body 还是 url
      const userToken = basicAuth(ctx.req); // 自动解析Basic Auth为{name, pass}
      let errMsg = 'token不合法'
      let decode
      if (!userToken || !userToken.name) {
        throw new Forbidden(errMsg);
      }
      try {
        decode = jwt.verify(userToken.name, securityConfig.secretKey)
      } catch (error) {
        if(error.name === 'TokenExpiredError') {
            errMsg = 'token已过期'
        }
        throw new Forbidden(errMsg)
      }
      ctx.auth = {
          uid: decode.uid,
          scope: decode.scope
      };
      next()
    };
  }
}

module.exports = {
  Auth
};

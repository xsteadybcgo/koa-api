const { HttpException } = require('../core/http-exception')

const catchError = async (ctx, next) => {
    try {
        await next()
    } catch (error) {
        // 已知错误
        if(global.config.enviroment === 'dev') {
            throw error
        }
        
        if(error instanceof HttpException) {
            ctx.body = {
                msg : error.msg,
                errorCode : error.errorCode,
                // status: error.status,
                requestUrl: error.requestUrl
            }
            ctx.status = error.status
        }else{
            ctx.body = {
                msg: 'unknown error',
                errorCode: 999,
                requestUrl: `${ctx.method} ${ctx.path}`
            }
            ctx.status = 500
        }
    }
}

module.exports = catchError
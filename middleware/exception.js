const { HttpException } = require('../core/http-exception')

const catchError = async (ctx, next) => {
    try {
        await next()
    } catch (error) {
        // 已知错误
        if(error instanceof HttpException) {
            ctx.body = {
                errorCode : error.errorCode,
                msg : error.msg,
                // status: error.status,
                requestUrl: error.requestUrl
            }
        }
    }
}

module.exports = catchError
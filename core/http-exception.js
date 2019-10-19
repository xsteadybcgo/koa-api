class HttpException extends Error {
    constructor(msg = "请求错误", errorCode = 10000, status = 400) {
        super();
        this.msg = msg;
        this.errorCode = errorCode;
        this.status = status;
    }
}

class ParameterException extends HttpException {
    constructor(msg, errorCode) {
        super()
        this.msg = msg || '参数错误'
        this.errorCode= errorCode || 10000
        this.status = 400
    }
}

module.exports = {
    HttpException,
    ParameterException
}

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
    super();
    this.msg = msg || "参数错误";
    this.errorCode = errorCode || 10000;
    this.status = 400;
  }
}

class Success extends HttpException {
  constructor(msg, errorCode) {
    super();
    this.status = 201;
    this.msg = msg || "ok";
    this.errorCode = errorCode || 0;
  }
}

class NotFound extends HttpException {
  constructor(msg, errorCode) {
    super();
    this.status = 404;
    this.msg = msg || "资源未找到";
    this.errorCode = errorCode || 10000;
  }
}

class AuthFailed extends HttpException {
  constructor(msg, errorCode) {
    super();
    this.status = 401;
    this.msg = msg || "资源未找到";
    this.errorCode = errorCode || 10004;
  }
}

class Forbidden extends HttpException {
  constructor(msg, errorCode) {
    super();
    this.status = 401;
    this.msg = msg || "资源未找到";
    this.errorCode = errorCode || 10006;
  }
} 

module.exports = {
  HttpException,
  ParameterException,
  Success,
  NotFound,
  AuthFailed,
  Forbidden
};

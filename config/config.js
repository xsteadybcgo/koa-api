module.exports = {
    enviroment: 'dev',
    database: {
        dbName: 'koa-api',
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'opOP9090_'
    },
    security: {
        secretKey: 'l2s_]f*&2="|aBq',
        expiresIn: 60*60
    },
    wx: {
        appId: 'wxe8bf70a51308e7ed',
        appSecret: '985bbe12969414bf0c5bdc768bd9848e',
        loginUrl: 'https://api.weixin.qq.com/sns/jscode2session?appid=%s&secret=%s&js_code=%s&grant_type=authorization_code'
    }
}
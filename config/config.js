module.exports = {
    enviroment: 'dev',
    database: {
        dbName: 'koa-api',
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'xhqba'
    },
    security: {
        secretKey: 'l2s_]f*&2="|aBq',
        expiresIn: 60*60
    },
    wx: {
        appId: 'wx115a6ed098ec63e7',
        appSecret: '737efa16ce85177ca43b6cf290aa618b',
        loginUrl: 'https://api.weixin.qq.com/sns/jscode2session?appid=%s&secret=%s&js_code=%s&grant_type=authorization_code'
    }
}
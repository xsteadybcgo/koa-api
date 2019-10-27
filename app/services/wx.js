const {appSecret, appId, loginUrl} = require('../../config/config').wx
const util = require('util')
const {AuthFailed} = require('../../core/http-exception')
const {User} = require('../models/user')
const {generateToken} = require('../../core/util')
const {Auth} = require('../../middleware/auth')
const axios = require('axios')
class WXManager {
    static async codeToToken(code) {
        const url = util.format(loginUrl, appId, appSecret, code)
        const result = await axios.get(url)
        if(result.status !== 200) {
            throw new AuthFailed('openid获取失败')
        }
        const {errcode,openid} = result.data
        if(errcode !== 0) {
            throw new AuthFailed(`openid获取失败：${errcode}`)
        }
        let user = await User.getUserByOpenid(openid)
        if(!user) {
            user = await User.registerByOpenid(openid)
        }
        return generateToken(user.id, Auth.USER)
    }
}

module.exports={WXManager}
const {LinValidator, Rule} = require('../../core/lin-validator')
const {User} = require('../models/user')
class PositiveIntergerValidator extends LinValidator {
    constructor() {
        super()
        this.id = [
            new Rule('isInt', '正整数', {min: 1})
        ]
    }
}

class RegisterValidator extends LinValidator {
    constructor() {
        super()
        this.email = [
            new Rule('isEmail', '不符合Email规范')
        ]
        this.password1 = [
            new Rule('isLength', '密码至少6个字符，最多32个字符', {
                min: 6,
                max: 32
            }),
            new Rule('matches', '密码格式错误', "^(?![0-9]+$)(?![a-zA-Z]+$)[0-9a-zA-Z]")
        ]
        this.password2 = this.password1
        this.nickname=[
            new Rule('isLength', '昵称至少4个字符，最多32个字符', {
                min: 4,
                max: 32
            })
        ]
    }

    validatePassword(ctx) {
        const pwd1 = ctx.body.password1;
        const pwd2 = ctx.body.password2;
        if(pwd1!==pwd2) {
            throw new Error('两个密码必须相同')
        }
    }

    async validateEmail(ctx) {
        const email = ctx.body.email
        const user = await User.findOne({
            where: {
                email: email
            }
        })
        if(user) {
            throw new Error("email已存在")
        }
    }
}

module.exports = {
    PositiveIntergerValidator,
    RegisterValidator
}
const {LinValidator, Rule} = require('../../core/lin-validator')

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

    validatePassword() {
        
    }
}

module.exports = {
    PositiveIntergerValidator
}
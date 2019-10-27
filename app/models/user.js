const { sequelize } = require("../../core/db");
const crypt = require("bcryptjs");
const { Sequelize, Model } = require("sequelize");
const { NotFound, AuthFailed } = require("../../core/http-exception");

class User extends Model {
  static async verifyEmailPassword(email, plainPwd) {
    const user = await User.findOne({
      where: {
        email
      }
    });
    if (!user) {
      throw new NotFound("账号不存在");      
    }
    const isCorrect = crypt.compareSync(plainPwd, user.password)
    if(!isCorrect) {
      throw new AuthFailed("密码不正确")
    }
    return user
  }

  static async getUserByOpenid(openid) {
    const user = User.findOne({
      where: {
        openid
      }
    })
    return user
  }

  static async registerByOpenid(openid) {
    const user = User.create({
      where: {
        openid
      }
    })
    return user
  }
}

User.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nickname: Sequelize.STRING,
    email: {
      type: Sequelize.STRING(128),
      unique: true
    },
    password: {
      type: Sequelize.STRING,
      set(val) {
        const salt = crypt.genSaltSync(10);
        const pwd = crypt.hashSync(val, salt);
        this.setDataValue("password", pwd);
      }
    },
    openid: {
      type: Sequelize.STRING(64),
      unique: true
    }
  },
  { sequelize, tableName: "user" }
);

// 数据迁移 sql更新

module.exports = {
  User
};

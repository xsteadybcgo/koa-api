const { sequelize } = require("../../core/db");
const crypt = require("bcryptjs");
const { Sequelize, Model } = require("sequelize");

class User extends Model {}

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
        this.setDataValue('password', pwd);
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

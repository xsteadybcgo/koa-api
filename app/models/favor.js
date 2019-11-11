const { Sequelize, Model } = require("sequelize");
const { sequelize } = require("../../core/db");
const { LikeError, disLikeError } = require('../../core/http-exception')
const { Art } = require('./art')
class Favor extends Model {
  static async like(artId, type, uid) {
    // 向favor表添加记录
    // 再修改music sentence等表中字段
    // 直接使用事务可以保证数据一致性
    const favor = await Favor.findOne({
      where: {
        artId,
        type,
        uid
      }
    })
    if (favor) {
      throw new LikeError()
    }
    return sequelize.transaction(async t => {
      await Favor.create({
        artId,
        type,
        uid
      }, { transaction: t })
      const art = await Art.getData(artId, type)
      art.increment('fav_nums', { by: 1, transaction: t })
    })
  }

  static async disLike(artId, type, uid) {

  }

  static async userLikeIt(artId, type, uid) {
    const favor = await Favor.findOne({
      where: {
        artId, type, uid
      }
    })
    return favor ? true : false
  }
}
Favor.init({
  uid: Sequelize.INTEGER,
  artId: Sequelize.INTEGER,
  type: Sequelize.INTEGER,
}, {
    sequelize,
    tableName: "favor"
  })

module.exports = { Favor }
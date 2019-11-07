const {
  Movie,
  Sentence,
  Music
} = require('./classic')
class Art {
  static async getData(artId, type) {
    let art = null
    switch (type) {
      case 100:
        art = await Movie.findOne({
          id: artId
        })
        break;
      case 200:

        break;
      case 300:

        break;
      case 400:

        break;
      default:
        break;
    }
    return art
  }
}

module.exports = { Art }
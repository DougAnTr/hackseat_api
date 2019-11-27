import Sequelize, { Model } from "sequelize";

class PostRating extends Model {
  static init(sequelize) {
    super.init(
      {
        liked: Sequelize.BOOLEAN
      },
      {
        sequelize,
        tableName: "post_ratings"
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Post, { foreignKey: "post", as: "rated_post" });
    this.belongsTo(models.User, { foreignKey: "user", as: "rating_author" });
  }
}

export default PostRating;

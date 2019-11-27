import Sequelize, { Model } from "sequelize";

class Post extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        text: Sequelize.STRING
      },
      {
        sequelize,
        tableName: "posts"
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "author", as: "post_author" });
    this.belongsTo(models.PostCategory, {
      foreignKey: "category",
      as: "post_category"
    });
    this.belongsTo(models.PostDifficultyLevel, {
      foreignKey: "difficulty",
      as: "post_difficulty"
    });
  }
}

export default Post;

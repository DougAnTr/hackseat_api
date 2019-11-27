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
      foreignKey: "post_category",
      as: "category"
    });
    this.belongsTo(models.PostDifficultyLevel, {
      foreignKey: "post_difficulty",
      as: "difficulty"
    });
  }
}

export default Post;

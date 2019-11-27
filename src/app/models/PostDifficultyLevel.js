import Sequelize, { Model } from "sequelize";

class PostDifficultyLevel extends Model {
  static init(sequelize) {
    super.init(
      {
        level: Sequelize.STRING
      },
      {
        sequelize,
        tableName: "post_difficulty_levels"
      }
    );

    return this;
  }
}

export default PostDifficultyLevel;
